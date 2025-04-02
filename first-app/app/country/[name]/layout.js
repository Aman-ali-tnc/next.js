export async function generateMetadata({params}){
    return{
        title: params.name
    }
  };
  
  export default function countryLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }