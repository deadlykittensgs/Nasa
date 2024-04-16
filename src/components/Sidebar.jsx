export default function Sidebar(props) {

    
    const {handelToggleModal, data} = props
  
    return (
      <div className="sidebar">
        <div onClick={handelToggleModal} 
        className="bgOverlay"></div>
        <div className="sidebarContents" >
          <h2>{data?.title}</h2>
          <div className="descriptionContainer">
            <p className="descriptionTitle">{data?.date}</p>
            <p>{data?.explanation}</p>
          </div>
          <button onClick={handelToggleModal}> <i className="fa-solid fa-arrow-right"></i> </button>
          </div>
      </div>
    )
  }