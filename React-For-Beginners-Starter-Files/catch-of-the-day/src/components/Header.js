const Header = (props) => (
    <header className="top">
        <h1>
            Catch 
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
            </span>
            day
        </h1>
    <h3 className='tagline'>
        <span>{props.tagline}</span>
    </h3>
    </header>
)

// No need for doing a react component as below because this is a stateless function
// Instead, we can use a regular function as above

// class Header extends Component {
//     render() {
//         return (
//                 <header className="top">
//                     <h1>
//                         Catch 
//                         <span className="ofThe">
//                             <span className="of">Of</span>
//                             <span className="the">The</span>
//                         </span>
//                         day
//                     </h1>
//                 <h3 className='tagline'>
//                     <span>{this.props.tagline}</span>
//                 </h3>
//                 </header>
//         )
//     }
// }

export default Header