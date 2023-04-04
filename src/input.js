import colorNames from "colornames"
const input = ({colour,setColour,setHexValue,isDark,setIsDark}) => {
  return (
    <form className="input" onSubmit={(e)=>(e.preventDefault())}>
        <label>Input</label>
          <input
                autoFocus
                type="text"
                placeholder="input"
                required
                value={colour}
                onChange={(e)=>{setColour(e.target.value);
                setHexValue(colorNames(e.target.value));
                }}
                />
          <button 
                 type="button"
                onClick={()=>setIsDark(!isDark)}
                 >Toggle</button>
    </form>
  )
}

export default input