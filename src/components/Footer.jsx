
export default function Footer(props) {
    
    const {showModal, handelToggleModal, data} = props
    
    
    return (
        <footer>
          <div className="backgroundGradient"></div>
          <div>
          <h1>APOD PROJECT</h1>
          <h2>{data?.title} </h2>
          </div>
          <button onClick={handelToggleModal}>
          <i className ="fa-solid fa-circle-info"></i>
          </button>
        </footer>
      )
    }
    