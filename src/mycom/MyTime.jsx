import './My.css';

function MyTime() {
  return (
    <div className='mydiv'>{new Date().toLocaleTimeString()}</div>
  );
}

export default MyTime;
