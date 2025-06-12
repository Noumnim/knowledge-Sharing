import React, { useContext, useState } from 'react'
import { DataContext } from '../../App'
import './navbar.css'
import CompoExample from '../componentExample/CompoExample';
export default function Navbar() {
    const data = useContext(DataContext);
    const [tabActive, setTabActive] = useState('useState')
    const handleClickTab = (e) => {
        setTabActive(e.target.value)
    }
    return (
        <div >
            <h2>React Hook</h2>
            <div className='navTab'>
                {data.topics.map((item) => (
                    <button className={(tabActive === item.title) ? 'active' : ''} key={item.title} value={item.title} onClick={(e) => handleClickTab(e)}>
                        {item.title}
                    </button>
                ))}
            </div>
            <div className='description'>
                {data.topics.map((item) =>
                    tabActive === item.title && (
                        <div key={item.title}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <pre>
                                <code>
                                   {item.code? item.code:''} 
                                </code>
                            </pre>
                            <CompoExample title={item.title}/>
                        </div>
                    ))}
            </div>
        </div>
    )
}
