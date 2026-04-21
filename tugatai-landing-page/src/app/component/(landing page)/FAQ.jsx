import React from 'react'
import Header from '../Header'
import FAQdropdown from '../FAQdropdown'
import Container from '../Container'

const FAQ = () => {
  return (
    <div className='py-10'>
        <Container>

        <Header
        titleText={`FAQ`}
        subtitleText={`Everything you need to know about Tugatai Cargo Logistics`}
        
        />

        <div className='mt-8'> 

            <FAQdropdown
            question={`How does the AI work?`}

            answer={`Our AI is powered by advanced GPT-4 technology, trained specifically for business operations. It understands natural language, maintains context across conversations, and learns from your business rules to provide accurate responses and take appropriate actions like creating quotes, scheduling bookings, and updating your CRM.`}/>


            <FAQdropdown
            question={`Can I customize the AI responses?`}
            
            answer={`Our AI is powered by advanced GPT-4 technology, trained specifically for business operations. It understands natural language, maintains context across conversations, and learns from your business rules to provide accurate responses and take appropriate actions like creating quotes, scheduling bookings, and updating your CRM.`}/>


        <FAQdropdown
            question={`How fast is the setup process?`}
            
            answer={`Our AI is powered by advanced GPT-4 technology, trained specifically for business operations. It understands natural language, maintains context across conversations, and learns from your business rules to provide accurate responses and take appropriate actions like creating quotes, scheduling bookings, and updating your CRM.`}/>

            <FAQdropdown
            question={`Which platforms are supported?`}
            
            answer={`Our AI is powered by advanced GPT-4 technology, trained specifically for business operations. It understands natural language, maintains context across conversations, and learns from your business rules to provide accurate responses and take appropriate actions like creating quotes, scheduling bookings, and updating your CRM.`}/>

        <FAQdropdown
            question={`What happens if the AI doesn't understand something?`}
            
            answer={`Our AI is powered by advanced GPT-4 technology, trained specifically for business operations. It understands natural language, maintains context across conversations, and learns from your business rules to provide accurate responses and take appropriate actions like creating quotes, scheduling bookings, and updating your CRM.`}/>

            <FAQdropdown
            question={`Is my data secure?`}
            
            answer={`Our AI is powered by advanced GPT-4 technology, trained specifically for business operations. It understands natural language, maintains context across conversations, and learns from your business rules to provide accurate responses and take appropriate actions like creating quotes, scheduling bookings, and updating your CRM.`}/>

            <FAQdropdown
            question={`Can I integrate with my existing tools?`}
            
            answer={`Our AI is powered by advanced GPT-4 technology, trained specifically for business operations. It understands natural language, maintains context across conversations, and learns from your business rules to provide accurate responses and take appropriate actions like creating quotes, scheduling bookings, and updating your CRM.`}/>

            <FAQdropdown
            question={`What kind of support do you provide?`}
            
            answer={`Our AI is powered by advanced GPT-4 technology, trained specifically for business operations. It understands natural language, maintains context across conversations, and learns from your business rules to provide accurate responses and take appropriate actions like creating quotes, scheduling bookings, and updating your CRM.`}/>

            







        </div>


            </Container>
    </div>
  )
}

export default FAQ