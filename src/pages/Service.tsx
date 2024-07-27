import { useState } from "react"

const tabs = [
    "Image",
    "Videos",
    "Files",
    "Links"
]

interface ITabContentProps {
    activeTab:string,
    tab:string
}


const TabContent = ({activeTab,tab}:ITabContentProps) => {
    return(
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 transition duration-[0.5s] overflow-hidden ${tab}`}
        style={{
            height : activeTab == tab ? "auto" : "0px",
            opacity : activeTab == tab ? 1 : 0
        }}
        >
            <img className="w-full h-full" src="/cover/01.jpg" alt="" onClick={ (e) => console.log(e.target) } />
            <img className="w-full h-full" src="/cover/02.jpg" alt="" />
            <img className="w-full h-full" src="/cover/03.jpg" alt="" />
            <img className="w-full h-full" src="/cover/04.jpg" alt="" />
        </div>
    )
}


const Service = () => {
    const [activeTab , setActiveTab] = useState(tabs[0])

    const renderTabs = tabs.map( (tab,idx) => (
        <li 
        key={idx}
        className={`cursor-pointer ${activeTab == tab ? "text-cyan-600" : ''}`} 
        onClick={() => setActiveTab(tab)}>{tab}</li>
    ) )

    const renderTabContent = tabs.map( (tab,idx) => (
        <TabContent activeTab={activeTab} tab={tab} key={idx} />
    ) )
  return (
    <div className="container">
        <h1 className='mb-12 text-center text-[30px]'>Services Page</h1>
        <div className="tabs">
            <ul className="flex items-center gap-4 py-3">
                {renderTabs}
            </ul>
        </div>
        <div className="tab-content py-4">
            {renderTabContent}
        </div>
    </div>
  )
}

export default Service