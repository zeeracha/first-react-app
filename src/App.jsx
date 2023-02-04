import About from "./About"


const App = () => {

  const myName = 'Zeera Ratchadaporn'
  const mySalary = 25000
  const myBfSalary = 90000
  const randomNumber = Math.random()

  return (
    <>
      <h1>App Component</h1>
      <About />
      <div style={{color:'green', fontSize:'24px'}}>Hello {myName}</div>
      {/* inline css */}
      <div>My salary is {mySalary+myBfSalary}</div>
      <div>ข้อมูลที่สุ่มออกมาได้ดังนี้ {randomNumber}</div>
      {
        randomNumber < 0.5 ? <div>คุณแพ้</div> : <div>คุณชนะ</div>
      }
      {/* ternary operation */}

    </>
  )
}

export default App
