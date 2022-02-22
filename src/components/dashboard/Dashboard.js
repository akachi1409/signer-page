
function Dashboard() {
  return (
    <div>
      <div style={{diaply:'flex',marginTop:'50px'}}>
        <input placeHolder="Target address"  style={{marginLeft:'50px'}} />
        <input placeHolder="NFT ID"  style={{marginLeft:'50px'}}  />
        <input value="Contract address"  style={{marginLeft:'50px'}}  />
        <button  style={{marginLeft:'50px'}}>mint</button>
      </div>
      <div style={{diaply:'flex',marginTop:'100px'}}>
        <input placeHolder="address"  style={{marginLeft:'50px'}} />
        <input placeHolder=""  style={{marginLeft:'50px'}}  />
        <button  style={{marginLeft:'50px'}}>Trans</button>
      </div>
      <div style={{diaply:'flex',marginTop:'100px'}}>
        <input placeHolder="NFT ID"  style={{marginLeft:'50px'}} />
        <input placeHolder="amount of token"  style={{marginLeft:'50px'}}  />
        <button  style={{marginLeft:'50px'}}>bake buy offer</button>
        <button  style={{marginLeft:'50px'}}>sell</button>
      </div>
    </div>
  );
}
export default Dashboard