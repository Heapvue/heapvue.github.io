import axios from 'axios';

export async function POST(req) {
  try {
    const body = await req.text(); 

    const response = await axios.post(
      'https://docs.google.com/forms/d/e/1FAIpQLScQlJAteWMX1BfFZk6ZBH0sjSWbMlWu1K8QAS2n1Q6dce-gsw/formResponse',
      body, 
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', 
        },
      }
    );

    return new Response(JSON.stringify({ message: 'Form submitted successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error submitting the form:', error.message);
    return new Response(JSON.stringify({ message: 'Error submitting the form' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
