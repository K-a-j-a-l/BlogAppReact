import "./sidebar.css"

export default function sidebar() {
    return ( <
        div className = "sidebar" >
        <
        div className = "sidebarItem" >
        <
        span className = "sidebarTitle" > ABOUT ME < /span> <
        img className = ""
        src = "https://png.pngtree.com/thumb_back/fh260/background/20210101/pngtree-double-row-tree-path-with-yellow-deciduous-autumn-leaves-image_519106.jpg"
        alt = "" / >
        <
        p > Lorem ipsum dolor sit amet consectetur adipisicing elit.Porro magni, < /p> <
        /div> <
        div className = "side" >
        <
        span className = "sidebarTitle" > CATEGORIES < /span> <
        ul className = "sidebarList" >
        <
        li className = "sidebarListItem" > Life < /li> <
        li className = "sidebarListItem" > Style < /li> <
        li className = "sidebarListItem" > Sports < /li> <
        li className = "sidebarListItem" > Music < /li> <
        li className = "sidebarListItem" > Tech < /li> <
        li className = "sidebarListItem" > Cinema < /li> <
        /ul> <
        /div> <
        div className = "sidebarItem" >
        <
        span className = "sidebarTitle" > FOLLOW US < /span> <
        div className = "sidebarSocial" >
        <
        i className = "SidebarIcon fa-brands fa-square-facebook" > < /i> <
        i className = "SidebarIcon fa-brands fa-square-twitter" > < /i> <
        i className = "SidebarIcon fa-brands fa-square-pinterest" > < /i> <
        i className = "SidebarIcon fa-brands fa-square-instagram" > < /i> <
        /div> <
        /div> <
        /div>
    )
}