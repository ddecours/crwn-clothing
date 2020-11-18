import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({id, title, imageUrl, size, linkUrl, history, match}) => (

    <div className={`${size} menu-item hover`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem)