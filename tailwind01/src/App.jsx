
import './App.css'
import Card from './components/Card.jsx'

function App() {
  
  return (
    <>
      <div>
        <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind Testing</h1>
        <Card name='Ashutosh Kumar' position='Application Adminstrator'/>
        <Card name='Rajeev Ranjan' position='Assistent Manager'/>
        <Card name='Sonia Kumari' position='Devops Engineer'/>
        <Card name='Raj Kumar' position='Manager'/>
      </div>
    </>
  )
}

export default App
