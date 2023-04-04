const Square = ({colour,hexValue,isDark}) => {
  return (
    <section className="square" style={{backgroundColor:colour,color:isDark?"#000":"#FFF"}
    }>
        
     <p>{colour ? colour:"Empty Value"}</p>
     <p>{hexValue? hexValue:null}</p>
    </section>
  )
}

export default Square