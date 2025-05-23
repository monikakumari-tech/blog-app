import Sidebar from "@/components/adminComponent/Sidebar"
export default function Layout({children}){
    return(
        <>
        <div>
            <Sidebar/>
        </div>
        {children}
        </>
    )
}