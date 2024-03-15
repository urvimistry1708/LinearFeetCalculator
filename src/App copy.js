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

      if (stackable === '1' && (height < 96 || height > 96)) {
        setPalletHeight(96);

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

        if (stackable === '1') {
          let i;

          if (width >= 33 && width <= 48) {

            let pallets = totalpalletsInt / 2;

            const result = (pallets * length) / 12;
            console.log(result);
            setLinearFeet(result.toFixed(2));
          }
          if (width >= 20 && width <= 24) {
            let sum = 0, result = 0;
            for (i = 4; i <= totalpalletsInt; i = (i + 4)) {
              sum += length;
              console.log("in loop iterator 20 96= " + i + "sum= " + sum)

              if (i === totalpalletsInt) {
               
                result = sum / 12;
                console.log("res= " + result);
                setLinearFeet(result.toFixed(2));
                return;
              }

              if ((i + 4) > totalpalletsInt) {
                console.log("Sum after= i= "+ i );
                sum += length / 2;
                console.log("Sum in if= " + sum);

                console.log("Sum after= " + sum);
                result = sum / 12;
                console.log("res= " + result);
                setLinearFeet(result.toFixed(2));
                return;
              }
            }
          }
          if (width >= 25 && width <= 32) {
            let sum = 0, result = 0;
            for (i = 3; i <= totalpalletsInt; i = (i + 3)) {
              sum += length;
              console.log("in loop iterator 30 96= " + i + "sum= " + sum)

              if (i === totalpalletsInt) {
                console.log("Sum after= " + sum);
                result = sum / 12;
                console.log("res= " + result);
                setLinearFeet(result.toFixed(2));
                return;
              }

              if ((i + 3) > totalpalletsInt) {
                sum += length / 2;
                console.log("Sum in if= " + sum);

                console.log("Sum after= " + sum);
                result = sum / 12;
                console.log("res= " + result);
                setLinearFeet(result.toFixed(2));
                return;
              }
            }
          }
        }

        if (stackable === '2') {

          let i;

          if (height === 96) {

            if (width >= 33 && width <= 48) {

              let pallets = totalpalletsInt / 2;

              const result = (pallets * length) / 12;
              console.log(result);
              setLinearFeet(result.toFixed(2));
            }
            if (width >= 20 && width <= 24) {
              let sum = 0, result = 0;
              for (i = 4; i <= totalpalletsInt; i = (i + 4)) {
                sum += length;
                console.log("in loop iterator 20 96= " + i + "sum= " + sum)

                if (i === totalpalletsInt) {
                  console.log("Sum after= " + sum);
                  result = sum / 12;
                  console.log("res= " + result);
                  setLinearFeet(result.toFixed(2));
                  return;
                }

                if ((i + 4) > totalpalletsInt) {
                  sum += length / 2;
                  console.log("Sum in if= " + sum);

                  console.log("Sum after= " + sum);
                  result = sum / 12;
                  console.log("res= " + result);
                  setLinearFeet(result.toFixed(2));
                  return;
                }
              }
            }
            if (width >= 25 && width <= 32) {
              let sum = 0, result = 0;
              for (i = 3; i <= totalpalletsInt; i = (i + 3)) {
                sum += length;
                console.log("in loop iterator 30 96= " + i + "sum= " + sum)

                if (i === totalpalletsInt) {
                  console.log("Sum after= " + sum);
                  result = sum / 12;
                  console.log("res= " + result);
                  setLinearFeet(result.toFixed(2));
                  return;
                }

                if ((i + 3) > totalpalletsInt) {
                  sum += length / 2;
                  console.log("Sum in if= " + sum);

                  console.log("Sum after= " + sum);
                  result = sum / 12;
                  console.log("res= " + result);
                  setLinearFeet(result.toFixed(2));
                  return;
                }
              }
            }
          }



          if (height >= 40 && height <= 48 && width >= 40 && width <= 48) {
            console.log("1")
            let sum = 0, result = 0;
            for (i = 4; i <= totalpalletsInt; i = (i + 4)) {
              sum += length;
              // console.log("in loop iterator= " + i + "sum= " + sum)

              if (i === totalpalletsInt) {
                // console.log("Sum after= " + sum);
                result = sum / 12;
                // console.log("res= " + result);
                setLinearFeet(result.toFixed(2));
                return;
              }

              if ((i + 4) > totalpalletsInt) {
                sum += length / 2;

                // console.log("Sum after= " + sum);
                result = sum / 12;
                // console.log("res= " + result);
                setLinearFeet(result.toFixed(2));
                return;
              }
            }
          }
          if (height >= 20 && height <= 24 && width >= 20 && width <= 24) {
            console.log("2")
            let sum = 0, result = 0;
            for (i = 16; i <= totalpalletsInt; i = (i + 16)) {
              sum += length;
              console.log("in loop iterator= " + i + "sum= " + sum)

              if (i === totalpalletsInt) {
                console.log("Sum after= " + sum);
                result = sum / 12;
                console.log("res= " + result);
                setLinearFeet(result.toFixed(2));
                return;
              }

              if ((i + 16) > totalpalletsInt) {
                sum += length / 2;

                console.log("Sum after= " + sum);
                result = sum / 12;
                console.log("res= " + result);
                setLinearFeet(result.toFixed(2));
                return;
              }
            }
          }
          if (height >= 25 && height <= 30 && width >= 25 && width <= 30) {
            console.log("3")
            let sum = 0, result = 0;

            for (i = 9; i <= totalpalletsInt; i = (i + 9)) {
              sum += length;
              console.log("in loop iterator= " + i + "sum= " + sum)

              if (i === totalpalletsInt) {
                console.log("Sum after= " + sum);
                result = sum / 12;
                console.log("res= " + result);
                setLinearFeet(result.toFixed(2));
                return;
              }

              if ((i + 9) > totalpalletsInt) {
                sum += length / 2;

                console.log("Sum after= " + sum);
                result = sum / 12;
                console.log("res= " + result);
                setLinearFeet(result.toFixed(2));
                return;
              }
            }
          }

          if (width >= 20 && width <= 24 && height >= 40 && height <= 48) {
            console.log("4")
            let sum = 0, result = 0;
            for (i = 12; i <= totalpalletsInt; i = (i + 12)) {
              sum += length;
              console.log("in loop iterator= " + i + "sum= " + sum)

              if (i === totalpalletsInt) {
                console.log("Sum after= " + sum);
                result = sum / 12;
                console.log("res= " + result);
                setLinearFeet(result.toFixed(2));
                return;
              }

              if ((i + 12) > totalpalletsInt) {
                sum += length / 2;

                console.log("Sum after= " + sum);
                result = sum / 12;
                console.log("res= " + result);
                setLinearFeet(result.toFixed(2));
                return;
              }
            }
          }

          if (width >= 25 && width <= 30 && height >= 40 && height <= 48) {
            console.log("5")
            let sum = 0, result = 0;

            for (i = 6; i <= totalpalletsInt; i = (i + 6)) {
              sum += length;
              console.log("in loop iterator= " + i + "sum= " + sum)

              if (i === totalpalletsInt) {
                console.log("Sum after= " + sum);
                result = sum / 12;
                console.log("res= " + result);
                setLinearFeet(result.toFixed(2));
                return;
              }

              if ((i + 6) > totalpalletsInt) {
                sum += length / 2;

                console.log("Sum after= " + sum);
                result = sum / 12;
                console.log("res= " + result);
                setLinearFeet(result.toFixed(2));
                return;
              }
            }
          }

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
