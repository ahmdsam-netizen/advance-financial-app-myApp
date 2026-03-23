import { Sidebar } from "../../component/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
        <div className="grid grid-cols-6">
            <div className="col-span-1 my-auto h-screen bg-gray-900 text-white p-4">
                <Sidebar className={"flex flex-col gap-2 m-3"} name={"Home"} path={"/home-page"}/>
                <Sidebar className={"flex flex-col gap-2 m-3"} name={"Transaction"} path={"/transaction-page"}/>
                <Sidebar className={"flex flex-col gap-2 m-3"} name={"Account"} path={"/account-page"}/>
                <Sidebar className={"flex flex-col gap-2 m-3"} name={"P2P Transfer"} path={"/transfer-page"}/>
            </div>
            <div className="col-span-5 bg-gray-300 h-screen">
                {children}
            </div>
        </div>
    </div>
  );
}