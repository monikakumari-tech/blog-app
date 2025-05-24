       import { Panel } from "@/components/adminComponent/Panel"
import Sidebar from "@/components/adminComponent/Sidebar"

const page = () => {
  return (
    <div className="flex ">
      <Sidebar/>
      <div className="flex-1 border-gray-400">
        <Panel/>
        <div className="p-10 text-lg ">
          <p className="font-semibold">ALL Subscriptions</p>
          <div className="border border-gray-400 max-w-xl min-h-[50vh]">
             <div className="grid grid-cols-[2fr_1fr_1fr]  pl-10 py-2 font-bold border-b-2 border-gray-200 text-gray-600 text-sm">
                  <span>EMAIL SUBSCRIPTION</span>
                  <span>DATE</span>
                  <span>ACTION</span>
             </div>
             <div className="grid grid-cols-[2fr_1fr_1fr]  pl-10  p-2  border-b-2 border-gray-200 text-gray-600 text-sm">
              <span className="font-bold">dfsdf</span>
              <span>343546566</span>
              <span>X</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default page