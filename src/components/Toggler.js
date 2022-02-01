
import { useState } from 'react'
import { func, string } from 'prop-types'
import { BsMoonStarsFill ,BsFillSunFill } from 'react-icons/bs'
import Switch from 'react-switch'

const Toggle = ({theme, toggleTheme}) => {

    const [isChecked, setIsChecked ] = useState(true)
    
    const checkSetter = () => {
        
        isChecked ? setIsChecked(false) : setIsChecked(true)
        toggleTheme()
    }

    return (
        <Switch
            uncheckedIcon={<BsFillSunFill
                             size='28px'
                             color='orange' 
                             width='fit-content' 
                             height='fit-content'

            />}
            checkedIcon={<BsMoonStarsFill
                            size='28px'
                            width='fit-content'
                            height='fit-content'    
                        />}
            onChange={isChecked,checkSetter} 
            checked={isChecked}
        />
    )
}

Toggle.prototype = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
}

export default Toggle