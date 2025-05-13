import React, { useState } from 'react'

export const PasswordStrength  = (pwd) =>{
    const checks = [
        pwd.length >=8,
        /[A-Z]/.test(pwd),
        /[a-z]/.test(pwd),
        /[0-9]/.test(pwd),
        /[^A-Za-z0-9]/.test(pwd),
    ];
    const passed = checks.filter(Boolean).length;
    if (passed === 1) return 'Level 1';
    if (passed >=2 && passed <=3) return 'Level 2';
    if (passed >=4 && passed <=5) return 'Level 3';
    return 'Weak Password '
};
const OTP_input = () =>{
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');
    const handleCheck = () => {
        setStrength(PasswordStrength(password))
    }
    return(
        <>
        <h2>Password Strngth Checker</h2>
        <input type='password' placeholder='enter password'
        value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleCheck}>Check Strength</button>
        {strength && <p>Strength: <strong>{strength}</strong></p>}
        </>
    )
}


export default OTP_input