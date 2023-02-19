import React from 'react'
import { useState } from 'react'
function Bmi() {
    // const html={
    //     background:"#43cfa1",
    // }
    const main={
        background:"#43cfa1",
            width: "400px",
            margin: "0 auto",
            padding: "30px",
            fontFamily: "sans-serif",
            borderRadius: "20px",
            border: "3px solid #999"
        
    }
    const input={
        textAlign: "center",
        margin: "20px auto 0 auto"
    }
    const cont={
        margin: "40px 10%",
        padding: "20px",
        textAlign: "center",
        borderRadius: "50px",
        border: "1px solid #000",
        fontWeight: "bolder",
        background: "#EEE",
        fontSize: "20px",
        lineHeight: "40px",
    }
    const [isHover, setIsHover] = useState(false);
    const [Hover, setHover] = useState(false);
    const cal={
        cursor: "pointer",
        textAlign: "center",
        width: "200px",
        padding: "5px",
        margin: "10px auto  auto",
        border: "1px solid #999",
        borderRadius: "10px",
        background: "-moz-linear-gradient(top, #E6B800, #ac2121)",
        fontWeight: "bold",
        height: "35px",
        backgroundColor: isHover ? '#52f0f8' : 'rgb(0, 191, 255)',
        color: isHover ? '#52f0f8' : '',
        boxShadow:" 5 -5px grey inset"

    }
    const foot={
        textAlign: "center",
        color:"#fff",
        // top:"30px",
        // position:"relative", 
       
    }
    const cpy={
        textDecoration: "none",
       // color:"white"
        color:Hover ?" #52f0f8" :"white" 
    }
    const tab={
        border:"1px solid #000"
    }
const bg={
    backgroundColor:"#43cfa1"
}
// const bgInfo={
//     backgroundColor:"#43cfa1",
//     paddingBottom:"0"
// }

    //Hover functions
    const handleMouseOver = () => {
        setIsHover(true);
     };
     const handleMouseOut = () => {
        setIsHover(false);
     };
    const MouseHoverIn = () => {
        setHover(true);
     };
     const MouseHoverOut = () => {
        setHover(false);
     };
  
    const [bmi,setBmi]=useState("your BMI here in");

    function calculateBmi(e){
        let a = document.getElementById("in1").value;
        let b= document.getElementById("in2").value;
        if(a===""&&b===""){
            alert("Enter Some Input To Calculate Your BMI")
        }
        else if(a===""){
            alert("Enter valid Weight")
        }
        else if(b===""){
            alert("Enter valid Height")
        }
        
        console.log(a,b)
        let res=(a/(Math.pow(b,2))*10000);
        e.target.value=res
        setBmi(res.toFixed(1));
    }

  return (
    <>
    <header></header>
    <main style={bg}>      
         <div id="main_container " style={main} className="w-100 webflow-style-input">
        <div id="weight_input"className='form-floating ' style={input}><input autoFocus placeholder="weight (kg)" className="form-control" type="number" id="in1"/>
            <label htmlFor="weight_input">weight in(kg)</label>
        </div>
        <div id="height_input" className='form-floating ' style={input}><input className="form-control" placeholder="height (cm)"type="number" id="in2"/>
        <label htmlFor="height_input">height in(cm)</label></div>
        <br/>
        <div id="calculate"  onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut} style={cal} onClick={calculateBmi} type="submit">Calculate your BMI</div>
        
        
        <div id="bmi_container" style={cont}><span>{bmi}</span><span> kg/m<sup>2</sup></span></div>
       
            <p style={input}>Healthy BMI range: 18 kg/m<sup>2</sup> - 25 kg/m<sup>2</sup></p>
           
       
        <p id="footer" style={foot}><em> &copy;Copyright 2022 | <a id="cpy"  onMouseEnter={MouseHoverIn}  onMouseLeave={MouseHoverOut} style={cpy} href="http://devdaim.me">DevDaim</a></em></p>
</div>
 <div id="information" style={bg}>
   <br /><br />
   <h1>BMI introduction</h1>
   <p>BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes further divided into subcategories such as severely underweight or very severely obese. Being overweight or underweight can have significant health effects, so while BMI is an imperfect measure of healthy body weight, it is a useful indicator of whether any additional testing or action is required. Refer to the table below to see the different categories based on BMI that are used by the calculator.</p>

   <h1>BMI table</h1>
   <p>This is the World Health Organization's (WHO) recommended body weight based on BMI values for adults. It is used for both men and women, age 20 or older.</p>
   <table className='mx-3 my-3' >
       
       <tr className="border border-1 border-dark">
           <th className="  border border-1 border-dark">Category</th>
           <th className=" border-1 border-dark">BMI Range</th>
       </tr>
       <tr style={tab}>
           <td style={tab}>Severe Thinness</td>
           <td style={tab}>less then 16</td>

       </tr>
       <tr style={tab}>
           <td style={tab}>Moderate Thinness</td>
           <td style={tab}>16-17</td>

       </tr>
       <tr style={tab}>
           <td style={tab}>Mild Thinness</td>
           <td style={tab}>17-18</td>

       </tr>
       <tr style={tab}>
           <td style={tab}>Normal</td>
           <td style={tab}>18-25</td>

       </tr>
       <tr style={tab}>
           <td style={tab}>Overweight</td>
           <td style={tab}>25-30</td>

       </tr>
       <tr style={tab}>
           <td style={tab}>Obese Class I</td>
           <td style={tab}>30-35</td>

       </tr>
       <tr style={tab}>
           <td style={tab}>Obese Class II</td>
           <td style={tab}>35-40</td>

       </tr>
       <tr style={tab}>
           <td style={tab}>Obese Class III</td>
           <td style={tab}>greater than 40</td>

       </tr >
       
   </table>
   <h2>Risks associated with being overweight</h2>
   <li>Being overweight increases the risk of a number of serious diseases and health conditions. Below is a list of said risks, according to the Centers for Disease Control and Prevention (CDC):
       <ul>
           <li>High blood pressure</li>
           <li>Higher levels of LDL cholesterol, which is widely considered "bad cholesterol," lower levels of HDL cholesterol, considered to be good cholesterol in moderation, and high levels of triglycerides</li>
           <li>Type II diabetes</li>
           <li>Coronary heart disease</li>
           <li>Stroke</li>
           <li>Gallbladder disease</li>
           <li>Osteoarthritis, a type of joint disease caused by breakdown of joint cartilage</li>
           <li>Sleep apnea and breathing problems</li>
           <li>Certain cancers (endometrial, breast, colon, kidney, gallbladder, liver)</li>
           <li>Low quality of life</li>
           <li>Mental illnesses such as clinical depression, anxiety, and others</li>
           <li>Body pains and difficulty with certain physical functions</li>
           <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
       </ul>
   </li>

   <h2>Risks associated with being underweight</h2>
   <li>Being underweight has its own associated risks, listed below:
       <ul>
           <li>Malnutrition, vitamin deficiencies, anemia (lowered ability to carry blood vessels)</li>
           <li>Osteoporosis, a disease that causes bone weakness, increasing the risk of breaking a bone</li>
           <li>A decrease in immune function</li>
           <li>Growth and development issues, particularly in children and teenagers</li>
           <li>Possible reproductive issues for women due to hormonal imbalances that can disrupt the menstrual cycle. Underweight women also have a higher chance of miscarriage in the first trimester</li>
           <li>Potential complications as a result of surgery</li>
           <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
          
       </ul>
   </li>
</div>
        </main>
<footer>
    &copy;Copyright 2023 |<a href="devdaim.me">DevDaim</a>
</footer>
    </>
  )
}

export default Bmi
