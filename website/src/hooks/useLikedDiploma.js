import { useState } from 'react';

const useLikedDiplomas = () => {
  const [likedDiplomas, setLikedDiplomas] = useState(
    () => JSON.parse(localStorage.getItem('likedDiplomas')) || []
  );

  const changeDiplomaState = id => {
    let currentLikedList = [];
    let previousLikedList = JSON.parse(localStorage.getItem('likedDiplomas'));
    if (previousLikedList === '' || previousLikedList === null) {
      currentLikedList.push(id);
    } else {
      currentLikedList = previousLikedList;
      if (!previousLikedList.includes(id)) {
        currentLikedList.push(id);
      } else {
        const index = currentLikedList.indexOf(id);
        if (index > -1) {
          currentLikedList.splice(index, 1);
        }
      }
    }
    setLikedDiplomas(currentLikedList);
    localStorage.setItem('likedDiplomas', JSON.stringify(currentLikedList));
  };
  const checkInLocalStorage = id => {
    const arrayLiked = JSON.parse(localStorage.getItem('likedDiplomas'));
    if (arrayLiked == null) {
      return false;
    }
    return arrayLiked.includes(id);
  };

  return {
    likedDiplomas,
    checkInLocalStorage,
    changeDiplomaState,
  };
};

export default useLikedDiplomas;
