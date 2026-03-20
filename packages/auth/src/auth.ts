
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../database/src/client";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "sam@gmail.com" , required : true},
        password: { label: "Password", type: "password", placeholder: " * * * * *" , required : true}
      },
      async authorize(credentials : any) {

        // INPUT validation need to be done before interacting with database

        const getUser = await prisma.user.findFirst({
            where : {
                email : credentials?.email 
            }
        })

        if(getUser){
          const compare = credentials?.password == getUser.password
          if(!compare) return null 
          return {
            id : String(getUser.id) ,
            email : getUser.email
          }
        }

        // recommend to create signup page differently

        try{
          const customer = await prisma.user.create({
            data : {
              email : credentials.email ,
              password : credentials.password
            }
          })
          console.log("ehll")
          await prisma.account.create({
            data : {
              balance : 0 ,
              ownerId : customer.id
            }
          })
          console.log("ehldl;al")
          return {
            id : customer.id.toString() ,
            email : customer.email
          }
        } 
        catch(error){
          return null ;
        }
      }
    }),

    // GitHub({
    //   clientId: process.env.GITHUB_CLIENT_ID || "",
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    // }),
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID || "",
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    // }),

  ],
  secret : process.env.NEXTAUTH_SECRET ,
  callbacks: {
    async jwt({ token, user, account, trigger } : any) {

        if (user) {
            token.id = user.id;
            token.name = user.name;
            token.email = user.email;
        }

        return token; // this gets encrypted and stored in cookie
    },
    session({ session, token } : any) {
        // use to expose data to app - get called everytime auth() or useSession() is called
        if (token.sub && session.user) {
          session.user.id = token.sub;
        }

        return session;
    },
  },
}