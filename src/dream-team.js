module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)){
    return false;
  } 
  let newNameDreamTeam = [];
  for (let i = 0; i <= members.length; i++) {
    if (typeof members[i] === 'string') {
      newNameDreamTeam.push(members[i].trim().slice(0, 1).toUpperCase());
    }
  }
  return newNameDreamTeam.sort().join('');
};
