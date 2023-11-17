import styled from "styled-components";

function App() {
    const createCheckout = async () => {
        const response = await fetch('https://shaver-hungary.myshopify.com/api/2023-10/graphql.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': '77690c5d675bf03912d4c4e0e95572c1',
            },
            body: JSON.stringify({
                query: `mutation {
                    checkoutCreate(input: {
                      lineItems: [{variantId: "43903146459401", quantity: 1}]
                    }) {
                      checkout {
                        id
                        webUrl
                      }
                    }
                  }`,
            }),
        });

        const responseData = await response.json();
        console.log(responseData.data.checkoutCreate.checkout)
    };

    return (
        <>
            <StyledButton
                type="button"
                onClick={createCheckout}
            >
                Button text
            </StyledButton>
        </>
    )
}

const StyledButton = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  color: #000;
  cursor: pointer;
`

export default App
