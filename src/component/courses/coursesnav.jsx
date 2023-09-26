import { useState } from "react"
import Col from "../col/col"
import Row from "../row/row"
import '../courses/coursesnav.css'
const CoursesNav = () => {
    const data = [
        {
            id: '1',
            title: "Web Design",
            tabContent: 'Web Design'
        },
        {
            id: '2',
            title: "Development",
            tabContent: 'Development'
        },
        {
            id: '3',
            title: "Graphic Design",
            tabContent: 'Graphic Design'
        },
        {
            id: '4',
            title: "Marketing",
            tabContent: 'Marketing'
        },
        {
            id: '5',
            title: "Finance",
            tabContent: 'Finance'
        }
    ]
    const [visibleTab, setVisibleTab] = useState(data[0].id)

    const listTitles = data.map((item) =>
        <li onClick={() => setVisibleTab(item.id)} className={visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"}>{item.title}</li>
    )

    const listContent = data.map((item) =>
        // <p style={visibleTab === item.id ? {} : { display: 'none' }}>{item.tabContent}</p>
        <p className={visibleTab === item.id ? "tabactive" : "tabinactive"}>{item.tabContent}</p>
    )
    return <>
        <Row>
            <Col className="mt-4 text-center courses-nav-container p-2 rounded" xl="xl-100">
                <div className="tabs">
                    <ul className="tabs-title ">
                        {listTitles}
                    </ul>
                </div>
            </Col>
        </Row >

        <Row>
            <Col>
                <div>
                    <div className="tab-content">
                        {listContent}
                    </div>
                </div>
            </Col>
        </Row>
    </>
}
export default CoursesNav