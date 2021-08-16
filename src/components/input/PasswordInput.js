import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { Icon, Input, withStyles } from '@ui-kitten/components';

const PasswordInput = ({ ...rest }) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true)

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
        </TouchableWithoutFeedback>
    );

    return (
        <Input
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            {...rest}
        />
    )
}

const ThemedPasswordInput = withStyles(PasswordInput, (theme) => ({

}))

export default ThemedPasswordInput
