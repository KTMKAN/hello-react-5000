import { Outlet } from "react-router-dom";

function LayoutA() {
    return (
        <div className="layout-a wrap">
            <div className="header">
                <div className="gnb-container">
                    <a className="gnb-item" href="TestPageA.do">TestPageA</a>
                    <a className="gnb-item" href="TestPageB.do">TestPageB</a>
                </div>
            </div>
            
            <div className="main">
                <Outlet />
            </div>

            <div className="footer">

            </div>
        </div>
    )
}

export default LayoutA;