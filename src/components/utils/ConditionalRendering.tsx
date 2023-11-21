const Conditional = ({
    showWhen,
    children
}: {
    showWhen: boolean
    children: React.ReactNode
}) => {
    if (showWhen) return <>{ children }</>

    return<></>
}

export default Conditional