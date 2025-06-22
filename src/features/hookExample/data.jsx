import icon from '../../assets/iconReact.png'
export const data = 
    {
        headTitle: 'What is React?',
        headDes: 'React ແມ່ນ JavaScript library ທີ່ພັດທະນາຂຶ້ນມາໂດຍ Meta ໃນປີ 2013 ເພື່ອຊ່ວຍໃນການສ້າງ UI (User Interface) ມີແນວຄິດທີ່ສ້າງຊິ້ນສ່ວນຍ່ອຍໆ ຫຼາຍໆສ່ວນມາປະກອບກັນພາຍຫຼັງ ເພື່ອງ່າຍໃນການຈັດການReact ສາມາດສ້າງສ່ວນປະກອບ (Components) ແລ້ວນຳກັບມາໃຊ້ໃຫມ່ໄດ້',
        image: icon,
        topics: [
            {
                title: 'useState',
                description:
                    'ໃຊ້ເພື່ອໃຫ້ສາມາດຈັດການຂໍ້ມູນໃນ (state) ຂອງ component ເພື່ອໃຫ້ສາມາດປ່ຽນແປງຄ່າໄດ້ແລະໃຫ້ UI ອັພເດດຕາມໄດ້.',
                code:`
               import { useState } from 'react'
               
               function StateComponent() {
                 const [count, setCount] = useState(0); // Declare state variable 'count' with initial value 0
               
                 return (
                   <div>
                     <h1>Count is {count}</h1>
                     <div className='state'>
                       {/* Buttons to update count state */}
                       <button onClick={() => setCount(count + 1)}>increment</button>
                       <button onClick={() => setCount(count - 1)}>decrement</button>
                     </div>
                   </div>
                 )
               }
               
               export default StateComponent;
               `
            },
            {
                title: 'useEffect',
                description:
                    'ໃຊ້ຈັດການ "ຜົນຂ້າງຄຽງ" ເຊັ່ນ: ດຶງຂໍ້ມູນຈາກ API,ອັພເດດ DOM ຫຼັງຈາກ render. ',
                code:`
                import { useEffect, useState } from 'react';
                
                export default function EffectComponent() {
                  const [image, setImage] = useState(''); // State to store image URL
                
                  const fetchImage = async () => {
                    try {
                      const res = await fetch('https://dog.ceo/api/breeds/image/random'); // API call
                      const data = await res.json(); // Convert to JSON
                      setImage(data.message); // Set image URL
                    } catch (err) {
                      console.error('Error fetching image:', err); 
                    }
                  };
                
                  useEffect(() => {
                    fetchImage(); //Call once when component mounts
                  }, []);
                
                  return (
                    <div id='useEffect'>
                      {image && <img src={image} alt="Random dog" />}
                      <br />
                      <button onClick={fetchImage}>
                        <h1>Random Dog</h1> 
                      </button>
                    </div>
                  );
                }
                

                `
            },
            {
                title: 'useContext',
                description:
                    'ເຂົ້າເຖິງຄ່າທີ່ຖືກແຊຣ໌ຈາກ context ໂດຍບໍ່ຕ້ອງສົ່ງ props ຜ່ານຫຼາຍລະດັບ ເໝາະສຳລັບຄ່າ global ເຊັ່ນ theme, ພາສາ, auth',
                code:`
                import { createContext, useState } from "react";
                
                // Create the context
                export const LangContext = createContext();
                
                export default function LangProvider({ children }) {
                  const [lang, setLang] = useState('en'); // State for current language
                
                  const toggleLang = () => {
                    // Toggle between 'en' and 'lao'
                    setLang((prev) => (prev === 'en' ? 'lao' : 'en'));
                  };
                
                  return (
                    // Provide lang and toggle function to children
                    <LangContext.Provider value={{ lang, toggleLang }}>
                      {children}
                    </LangContext.Provider>
                  );
                }
                
                `
            },
            {
                title: 'useReducer',
                description:
                    'ໃຊ້ຈັດການ state ແບບຊັບຊ້ອນ ໂດຍອາໄສຟັງຊັ່ນ reducer ແລະ action.',
                code:`
               import React, { useReducer } from 'react'
               
               // Reducer function to handle actions
               function counterReducer(state, action) {
                 switch (action.type) {
                   case "increment":
                     return { count: state.count + 1 }; // Increase count
                   case "decrement":
                     return { count: state.count - 1 }; // Decrease count
                   case "reset":
                     return { count: 0 }; // Reset to 0
                   default:
                     return state; // Return current state if action not matched
                 }
               }
               
               const initialState = {
                 count: 0 // Initial count value
               }
               
               function ReducerComponent() {
                 const [state, dispatch] = useReducer(counterReducer, initialState); // useReducer setup
               
                 return (
                   <div>
                     <p>Count: {state.count}</p> {/* Show current count */}
               
                     {/* Dispatch actions */}
                     <button onClick={() => dispatch({ type: "increment" })}>increment</button>
                     <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
                     <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
                   </div>
                 );
               }
               
               export default ReducerComponent;
               `
            },
            {
                title: 'useCallback',
                description:
                    'ໃຊ້ເກັບຟັງຊັ່ນບໍ່ໃຫ້ສ້າງໃໝ່ໃນທຸກຄັ້ງທີ່ component render (ເພື່ອ performance ທີ່ດີຂຶ້ນໂດຍສະເພາະກັບ child component).',
                code:`
                import React, { memo, useCallback, useState } from 'react'

                //Memoized child component to prevent unnecessary re-renders
                const Child = memo(({ onClick }) => {
                  console.log("Child render"); // Logs when child renders
                  return (
                    <>
                
                      <button onClick={onClick}>Increment</button>
                    </>
                  );
                })
                export default function CallbackComponent() {
                  const [count, setCount] = useState(0);
                  const handleAdd = () => {
                    setCount(prev=> prev + 1)
                    console.log("add count");
                  };
                
                  //Memoized function so Child doesn't re-render
                  const handleIncrement = useCallback(() => {
                    console.log("add handleIncrement");
                  }, []);
                
                  return (
                    <div>
                      <p>Count: {count}</p>
                      <button onClick={handleAdd}>add</button>
                      <Child onClick={handleIncrement} />
                    </div>
                  );
                }
                `
            },
            {
                title: 'useMemo',
                description:
                    'ໃຊ້ຈົດຈຳຄ່າທີ່ຄຳນວນແລ້ວ ບໍ່ໃຫ້ຄຳນວນໃໝ່ທຸກຄັ້ງທີ່ component render ເໝາະກັບການປະມວນຜົນໜັກ. ເຮັດວຽກລະຫວ່າງການ render.',
                code:`
                import React, { useMemo, useState } from 'react'
                
                //Product list
                const products = [
                  { id: 1, name: 'iPhone', category: 'phone' },
                  { id: 2, name: 'iPad', category: 'tablet' },
                  { id: 3, name: 'Galaxy S', category: 'phone' },
                  { id: 4, name: 'MacBook', category: 'laptop' },
                ];
                
                export default function MemoComponent() {
                  const [category, setCategory] = useState('all'); // Category filter
                  const [count, setCount] = useState(0); // Unrelated state for testing re-render
                
                  // Memoize filtered list so it only recalculates when category changes
                  const filteredProducts = useMemo(() => {
                    console.log('Filter'); // Log only when category changes
                    if (category === 'all') return products;
                    return products.filter(p => {
                      console.log('Filtering item:', p.name); // Show filtered items
                      return p.category === category;
                    });
                  }, [category]); //Recalculate only when category changes
                
                  return (
                    <div>
                      <h2>Product List</h2>
                
                      {/*Filter dropdown */}
                      <div>
                        <label>Filter by: </label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                          <option value="all">All</option>
                          <option value="phone">Phone</option>
                          <option value="tablet">Tablet</option>
                          <option value="laptop">Laptop</option>
                        </select>
                      </div>
                
                      {/* Show filtered products */}
                      <ul>
                        {filteredProducts.map(p => (
                          <li key={p.id}>{p.name}</li>
                        ))}
                      </ul>
                
                      <hr />
                      <p>Count: {count}</p>
                      {/*This button increases count but won't re-filter products */}
                      <button onClick={() => setCount(count + 1)}>Click Me</button>
                    </div>
                  );
                }
                `
            },
            {
                title: 'useRef',
                description:
                    'ໃຊ້ເກັບຄ່າຫຼືອ້າງອີງ DOM ໂດຍບໍ່ກະທົບການ render ເຊັ່ນ ໃຊ້ເພື່ອ focus input ຫຼືເກັບຄ່າລະຫວ່າງຮອບ render. ມັນຈະບໍ່ re-render ເມື່ອຂໍ້ມູນອັພເດດ ເຊັ່ນ focus input, previous value ແລະ ອື່ນໆ',
                code:`
                import React, { useRef } from 'react';
                
                function RefComponent() {
                  const video = useRef(); //Create ref to access video DOM element
                
                  const handlePlay = () => {
                    video.current.play(); //Use ref to play the video programmatically
                  };
                
                  return (
                    <div>
                      {/* Attach ref to video element */}
                      <video
                        ref={video}
                        width="320"
                        height="240"
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                      />
                      <br />
                      <button onClick={handlePlay}>Play</button> {/* Play video on click */}
                    </div>
                  );
                }
                
                export default RefComponent;
                `
            },
            {
                title: 'useLayoutEffect',
                description:
                    'ເຮັດວຽກທັນທີຫຼັງ DOM ປ່ຽນແປງ ແຕ່ກ່ອນ browser ສະແດງຜົນ ເໝາະກັບການວັດ layout ຫຼື ຕັ້ງຄ່າທີ່ຕ້ອງຊັດເຈນກ່ອນສະແດງຜົນ.',
                code:`
                import React, { useEffect, useLayoutEffect, useState } from 'react'
                
                export default function LayoutComponent() {
                  const [color, setColor] = useState('white'); // Initial background color
                
                  // useLayoutEffect runs **before** the browser paints the screen
                  useLayoutEffect(() => {
                    console.log('useLayoutEffect Start');
                    setColor('lightgreen'); // Update color immediately before paint
                    console.log('useLayoutEffect Set color to lightgreen');
                  }, []);
                
                  // Uncomment this to try useEffect instead
                  // useEffect(() => {
                  //   console.log('useEffect Start');
                  //   setColor('lightblue'); // Runs after paint (you may see white flash)
                  //   console.log('useEffect Set color to lightblue');
                  // }, []);
                
                  return (
                    <>
                      <div style={{
                        height: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        backgroundColor: color, // Show current background color
                        transition: 'background 0.3s ease',
                        marginBottom: '20px'
                      }}>
                        <h1>Color: {color}</h1>
                      </div>
                    </>
                  );
                }
                `
            },
            {
                title: 'useImperativeHandle',
                description:
                    'ກຳນົດວ່າ parent component ຈະເຂົ້າເຖິງຫຍັງແດ່ຈາກລູກຜ່ານ Ref ໃຊ້ຄູ່ກັບ forwardRef ເປີດເຜີຍ method ຫຼື ເປີດເຜີຍ method ຫຼື property ທີ່ຈຳເປັນ.',
                code:`
                import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
                
                // Child input component using forwardRef
                const CustomInput = forwardRef((props, ref) => {
                  const inputRef = useRef(); // Internal ref for the input element
                  const [value, setValue] = useState(''); // State for input value
                
                  //Expose methods to parent using useImperativeHandle
                  useImperativeHandle(ref, () => ({
                    focus: () => {
                      inputRef.current.focus(); // Focus the input
                    },
                    clear: () => {
                      setValue(''); // Clear value and focus input
                      inputRef.current.focus();
                    },
                    getValue: () => {
                      return value; // Return current value
                    },
                    setValue: (newValue) => {
                      setValue(newValue); // Set new value
                    }
                  }));
                
                  return (
                    <input
                      className="custom-input"
                      ref={inputRef}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      placeholder="Type something..."
                    />
                  );
                });
                
                export default function ImperComponent() {
                  const inputRef = useRef(); // Ref for CustomInput
                  const [message, setMessage] = useState(''); // Message to show input value
                
                  return (
                    <div style={{ padding: '2rem' }}>
                      <h1>{message}</h1>
                      <CustomInput ref={inputRef} /> {/* Pass ref to child */}
                      <div style={{ display: 'flex', gap: 10 }}>
                        <button onClick={() => inputRef.current.focus()}>
                          Focus Input
                        </button>
                        <button onClick={() => inputRef.current.clear()}>
                          Clear Input
                        </button>
                        <button onClick={() => setMessage(inputRef.current.getValue())}>
                          Get Input
                        </button>
                        <button onClick={() => inputRef.current.setValue('Hello')}>
                          Set Input
                        </button>
                      </div>
                    </div>
                  );
                }
                `
            },
        ]

    };    

