import './App.css';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [totalpallets, setTotalPallets] = useState('');
  const [stackable, setStackable] = useState('');
  const [palletLength, setPalletLength] = useState('');
  const [palletWidth, setPalletWidth] = useState('');
  const [palletHeight, setPalletHeight] = useState('');
  const [linearFeet, setLinearFeet] = useState(0);


  useEffect(() => {

    async function calculateLinearFeet() {

      const length = (parseInt(palletLength));
      const width = (parseInt(palletWidth));
      const height = (parseInt(palletHeight));
      const totalpalletsInt = (parseInt(totalpallets));

      if (parseInt(stackable) === 1 && (height < 96 || height > 96)) {
        setPalletHeight(96);
      }

      if(stackable === ''){
        setStackable(1);
      }

      if (totalpalletsInt > 26) {
        toast.error('Pallet should not exceed more than 26!', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      if (parseInt(palletHeight) > 96 && stackable === '2') {
        toast.error('Invalid Pallet height!', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      if (length > 636) {
        toast.error('Invalid Pallet lenght!', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      if (width > 96) {
        toast.error('Invalid Pallet width!', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }



      if (palletHeight !== '' && palletLength !== '' && palletWidth !== '') {

        console.log("Stackable ? "+stackable)
        let width_spot, height_spot, skid_spot, total_skid_length_1, total_skid_length_2, linear_foot;
        if (parseInt(stackable) === 1) {

          width_spot = 96 / width

          height_spot = 1

          skid_spot = width_spot * height_spot

          total_skid_length_1 = (totalpalletsInt / skid_spot) * length

          total_skid_length_2 = (totalpalletsInt % skid_spot) / skid_spot * length

          linear_foot = (total_skid_length_1 + total_skid_length_2) / 12

          setLinearFeet(linear_foot.toFixed(2));

          console.log("in I")
        }

        if (parseInt(stackable) === 2) {

          width_spot = 96 / width

          height_spot = 96 / height

          skid_spot = width_spot * height_spot

          console.log("Skid spot=" +skid_spot);

          total_skid_length_1 = (totalpalletsInt / skid_spot) * length

          total_skid_length_2 = (totalpalletsInt % skid_spot) / skid_spot * length

          console.log("total_skid_length_1=" +total_skid_length_1);
          console.log("total_skid_length_2" +total_skid_length_2)


          linear_foot = (total_skid_length_1 + total_skid_length_2) / 12

          console.log("linear_foot="+ linear_foot)

          setLinearFeet(linear_foot.toFixed(2));

        }

      }
      console.log(linearFeet);


    }
    calculateLinearFeet();


  }, [palletHeight, palletLength, palletWidth, stackable, totalpallets, linearFeet]);



  return (
    <div className="App">


      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className='main'>
        <h2>Linear Feet Calculator</h2>
        <div className='main-container'>
          <div className='pallet-row'>
            <div>
              <span>Total Pallets</span>
              <div>
                <input type="text" className='totalpallets' name="totalpallets" placeholder='ex. 26' value={totalpallets} onChange={(e) => setTotalPallets(e.target.value)}></input>
              </div>
            </div>
            <div>
              <span>Stackable</span>
              <div>
                <select value={stackable} className='stackable' name='stackable' onChange={(e) => setStackable(e.target.value)}>
                  <option value='1'>No-Stackable</option>
                  <option value='2'>Stackable</option>
                </select>
              </div>
            </div>
            <div className='pallet-dims-row'>
              <div>
                <span>Size of 1 skid or Pallet</span>
                <div className='pallet-dims'>
                  <div>
                    <input type="text" className='dims' name="palletLength" placeholder='Length' value={palletLength} onChange={(e) => setPalletLength(e.target.value)}></input>
                  </div>
                  &nbsp;<div>X</div> &nbsp;
                  <div>
                    <input type="text" className='dims' name="palletWidth" placeholder='Width' value={palletWidth} onChange={(e) => setPalletWidth(e.target.value)}></input>
                  </div>
                  &nbsp;<div>X</div>&nbsp;
                  <div>
                    <input type="text" className='dims' name="palletHeight" placeholder='Height' value={palletHeight} onChange={(e) => setPalletHeight(e.target.value)}></input>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='linear-feet-row'>
            <div className='linear-feet'>
              <span>Linear Feet': </span>
              <span> {linearFeet}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
