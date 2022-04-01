export default function Content(props) {
    const { children, ...customMeta } = props
    return (
        <>  
            <div className="container">
                {children}
            </div>
        </>
    )
}