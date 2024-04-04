export default function Sidebar(props) {

    
    const {handelToggleModal} = props
  
    return (
      <div className="sidebar">
        <div onClick={handelToggleModal} 
        className="bgOverlay"></div>
        <div className="sidebarContents" >
          <h2>Image Name</h2>
          <div>
            <p>description</p>
            <p>lakjsdnfladsknfjkdasnfjdsanfkljdsnfklasnfln</p>
          </div>
          <button onClick={handelToggleModal}> <i className="fa-solid fa-arrow-right"></i> </button>
          </div>
      </div>
    )
  }