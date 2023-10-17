
import './App.css';
import Form from './form.jsx'

function App() {


  return (
    <div className="container mx-auto  lg:grid grid-cols-2 place-items-center flex flex-col gap-8 p-3 py-16 text-center lg:text-start " >
        <div className="hero-title p">
          <h1 className='text-3xl lg:text-5xl font-bold text-white'>Learn to code by watching others</h1>
          <p className='text-white'>See how experienced developers solve problems in real-time. Watching scripted tutorials si great, but understanding how developrs think is invaluable.</p>
        </div>
        <div className="form p flex flex-col gap-4">
          <label className=' p-4 rounded-lg text-white text-sm flex justify-center'
           htmlFor=""><b>Try it free 7 days</b> then $20/mo. thereafter</label>
          <Form />
        </div>
    </div>
  );
}

export default App;
