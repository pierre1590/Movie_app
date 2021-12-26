import Icon from '../img/sad-icon.jpg';

export default function NotFound () {
  return (
    <> 
      <img src={Icon} alt="Not Found" style={{margin:'0 41%',width:'15%', height:'15%'}}/>
      <h1 className="error">Ops, error 404 <br/>page not found</h1>
    </>
  )
}