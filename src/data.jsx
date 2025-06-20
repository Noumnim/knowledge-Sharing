import icon from './assets/iconReact.png'
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
                import React, { useState } from 'react'
                import './state.css'
                function StateComponent() {
                    const [count,setCount]=useState(0);
                  return (
                    <div className='state'>
                        <h1>Count is {count}</h1>
                        <button onClick={()=>setCount(count+1)}>+</button>
                        <button onClick={()=>setCount(count-1)}>-</button>
                    </div>
                  )
                }
                export default StateComponent;`
            },
            {
                title: 'useEffect',
                description:
                    'ໃຊ້ຈັດການ "ຜົນຂ້າງຄຽງ" ເຊັ່ນ: ດຶງຂໍ້ມູນຈາກ API,ອັພເດດ DOM ຫຼັງຈາກ render. ',
                code:`
                import{ useEffect, useState } from 'react';
                export default function EffectComponent() {
                const [image, setImage] = useState('');

                const fetchImage = async () => {
                    try {
                    const res = await fetch('https://dog.ceo/api/breeds/image/random');
                    const data = await res.json();
                    setImage(data.message);
                    } catch (err) {
                    console.error('Error fetching image:', err);
                    }
                };
                useEffect(() => {
                    fetchImage();
                }, []);

                return (
                    <div id='useEffect'>
                    <img src={image} alt="Random dog"/>
                    <br />
                    <button onClick={fetchImage}><h1>Random Dog</h1></button>
                    </div>
                );
                }

                `
            },
            {
                title: 'useContext',
                description:
                    'ເຂົ້າເຖິງຄ່າທີ່ຖືກແຊຣ໌ຈາກ context ໂດຍບໍ່ຕ້ອງສົ່ງ props ຜ່ານຫຼາຍລະດັບ ເໝາະສຳລັບຄ່າ global ເຊັ່ນ theme, ພາສາ, auth',
            },
            {
                title: 'useReducer',
                description:
                    'ໃຊ້ຈັດການ state ແບບຊັບຊ້ອນ ໂດຍອາໄສຟັງຊັ່ນ reducer ແລະ action.',
            },
            {
                title: 'useCallback',
                description:
                    'ໃຊ້ເກັບຟັງຊັ່ນບໍ່ໃຫ້ສ້າງໃໝ່ໃນທຸກຄັ້ງທີ່ component render (ເພື່ອ performance ທີ່ດີຂຶ້ນໂດຍສະເພາະກັບ child component).',
            },
            {
                title: 'useMemo',
                description:
                    'ໃຊ້ຈົດຈຳຄ່າທີ່ຄຳນວນແລ້ວ ບໍ່ໃຫ້ຄຳນວນໃໝ່ທຸກຄັ້ງທີ່ component render ເໝາະກັບການປະມວນຜົນໜັກ. ເຮັດວຽກລະຫວ່າງການ render.',
            },
            {
                title: 'useRef',
                description:
                    'ໃຊ້ເກັບຄ່າຫຼືອ້າງອີງ DOM ໂດຍບໍ່ກະທົບການ render ເຊັ່ນ ໃຊ້ເພື່ອ focus input ຫຼືເກັບຄ່າລະຫວ່າງຮອບ render. ມັນຈະບໍ່ re-render ເມື່ອຂໍ້ມູນອັພເດດ ເຊັ່ນ focus input, previous value ແລະ ອື່ນໆ',
            },
            {
                title: 'useLayoutEffect',
                description:
                    'ເຮັດວຽກທັນທີຫຼັງ DOM ປ່ຽນແປງ ແຕ່ກ່ອນ browser ສະແດງຜົນ ເໝາະກັບການວັດ layout ຫຼື ຕັ້ງຄ່າທີ່ຕ້ອງຊັດເຈນກ່ອນສະແດງຜົນ.',
            },
            {
                title: 'useImperativeHandle',
                description:
                    'ກຳນົດວ່າ parent component ຈະເຂົ້າເຖິງຫຍັງແດ່ຈາກລູກຜ່ານ Ref ໃຊ້ຄູ່ກັບ forwardRef ເປີດເຜີຍ method ຫຼື ເປີດເຜີຍ method ຫຼື property ທີ່ຈຳເປັນ.',
            },
        ]

    };    

