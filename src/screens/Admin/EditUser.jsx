import React from 'react'
import { Text } from 'react-native'
import PageLayout from '../../components/General/PageLayout'
export default  function EditUser() {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    password: "",
    registrationNumber: "",
    accountNumber: "",
    profilePicture: "",
    major: "",
    building: "",
    rol: rol,
  });
    return (
      <PageLayout>
        <Text>
          Hola
        </Text>
      </PageLayout>
      
    )
}