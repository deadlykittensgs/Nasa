
export default function Footer(props) {
    
    const {showModal, handelToggleModal} = props
    
    
    return (
        <footer>
          <div className="backgroundGradient"></div>
          <div> <h2>The Name Of the Picture</h2>
          <h1>APOD PROJECT</h1>
          </div>
          <button onClick={handelToggleModal}>
          <i className ="fa-solid fa-circle-info"></i>
          </button>
        </footer>
      )
    }
    