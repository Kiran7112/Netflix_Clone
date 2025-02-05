import React, { useState, useEffect } from 'react';
import "./styles/profile.css";
import { FaCloudUploadAlt } from "react-icons/fa";
import Logo from './component/logo';
import { auth, db } from './config/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { CiEdit } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { collection, getDocs, addDoc, updateDoc, doc, query, where } from 'firebase/firestore';
import { storage } from './config/firebase';
import {v4} from 'uuid';
import { uploadBytes,ref,getDownloadURL } from 'firebase/storage';
import Nav from './component/Nav';
function Profile() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [loading, setLoading] = useState(false); 
  const [upload,setUpload]=useState("");
  const [updateMode, setUpdateMode] = useState(false); 
 onAuthStateChanged(auth,(data)=>{
    console.log("pre",data);
 })
  useEffect(() => {
    fetchData(); 
  }, []);

  const signOutFromUser=async()=>{
    await signOut(auth);
  }
  
  useEffect(() => {
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
      setUpload(storedImage);
    }
  }, []);

  const fetchData = async () => {
    try {
      const userQuery = query(collection(db, 'Users'), where("email", "==", auth.currentUser.email));
      const querySnapshot = await getDocs(userQuery);
      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data().userData;
        setFullName(userData.fullName);
        setUsername(userData.username );
        setEmail(auth.currentUser?.email);
        setAddress(userData.address);
        setPhoneNumber(userData.phoneNumber);
        setDob(userData.dob || '');
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const createUser = async () => {
    try {
      const userQuery = query(collection(db, 'Users'), where("email", "==", auth.currentUser.email));
      const querySnapshot = await getDocs(userQuery);
      if (!querySnapshot.empty) {
        const docId = querySnapshot.docs[0].id;
        await updateDoc(doc(db, 'Users', docId), {
          userData: {
            fullName: fullName,
            username: username,
            email: email,
            address: address,
            phoneNumber: phoneNumber,
            dob: dob,
          }
        });
      } else {
        await addDoc(collection(db, 'Users'), {
          email: auth.currentUser?.email,
          id: auth.currentUser?.uid,
          userData: {
            fullName: fullName,
            username: username,
            email: email,
            address: address,
            phoneNumber: phoneNumber,
            dob: dob,
          }
        });
      }
      fetchData();
      setUpdateMode(false); 
    } catch (error) {
      console.log(error);
    }
  };

  const toggleUpdateMode = () => {
    setUpdateMode(prevMode => !prevMode);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  
 

  const uploadImage = (e) => {
    const inputFile = e.target.files[0];
    if (!inputFile) return;
    const imageRef = ref(storage, `images/${inputFile.name + v4()}`);
    const uploadTask = uploadBytes(imageRef, inputFile);
    uploadTask.then((snapshot) => {
      console.log('Image uploaded successfully');
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        setUpload(downloadURL);
        localStorage.setItem('profileImage', downloadURL);
      });
    }).catch((error) => {
      console.error('Error uploading image:', error);
    });
  };
  
  
  return (
    <>
           <div className='nav-bar-con'>
          <Nav />
              
      </div>
      
      <div className="profile-main-cont"><br />
      
     <div className='bg bg-danger'>
     <div className='profile'>
          <img src={upload} className="img-fluid"  />
            <p className='text-center p-2 userName'>Hello 👋🏿 ! {username}</p>
        </div>
     </div>
        
        <div className='upload text-center'> 
          <label htmlFor="image">
            <FaCloudUploadAlt style={{fontSize:'25px',paddingRight:'5px'}} />Upload 
          </label>
          <input type="file" name="image" id="image" onChange={uploadImage} />
        </div>
        <div className="main-user-info">
          <div className="user-input-box">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              disabled={!updateMode} 
            />
            {updateMode && <button onClick={createUser}>Update</button>}
            {!updateMode && <button onClick={toggleUpdateMode}>Change</button>}
          </div>

          <div className="user-input-box">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username || auth?.currentUser?.displayName}
              onChange={(e) => setUsername(e.target.value)}
              disabled={!updateMode} 
            />
            {updateMode && <button onClick={createUser}>Update</button>}
            {!updateMode && <button onClick={toggleUpdateMode}>Change</button>}
          </div>

          <div className="user-input-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!updateMode} 
            />
            {updateMode && <button onClick={createUser}>Update</button>}
            {!updateMode && <button onClick={toggleUpdateMode}>Change</button>}
          </div>

          <div className="user-input-box">
            <label htmlFor="text">Address</label>
            <input
              type="text"
              id="Address"
              name="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              disabled={!updateMode} 
            />
            {updateMode && <button onClick={createUser}>Update</button>}
            {!updateMode && <button onClick={toggleUpdateMode}>Change</button>}
          </div>

          <div className="user-input-box">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              disabled={!updateMode} 
            />
            {updateMode && <button onClick={createUser}>Update</button>}
            {!updateMode && <button onClick={toggleUpdateMode}>Change</button>}
          </div>

          <div className="user-input-box">
            <label htmlFor="dob">DOB</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              disabled={!updateMode} 
            />
            {updateMode && <button onClick={createUser}>Update</button>}
            {!updateMode && <button onClick={toggleUpdateMode}>Change</button>}
          </div>
        </div>

        <div className='text-center'>
          <button type='submit'  className='btn btn-danger p-2 submit-update' style={{ width: '100px',boxShadow:'0 0 10px black' }} onClick={createUser}>Submit</button>
        </div>
      </div>
    </>
  );
}


export default Profile;
