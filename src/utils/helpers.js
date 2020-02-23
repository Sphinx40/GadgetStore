export function moneyInputHanler(value, decimal) {
    // replace all non-numeric characters but "."
    value = value.replace(/\s+/g, '');
  
    // if empty put 0
    if (value === '' || value === '0' || value === '00' || value === '000') {
      value = '0';
      return value;
    }
  
    if (value.charAt(value.length - 1) === '.') {
      if (decimal === 0) return value.slice(0, -1);
      return value;
    }
    // remove leading zeros
    if (!value.startsWith('0.')) {
      value = value.replace(/^0+/, '');
    }
  
    // value = new Number(parseFloat(value)).toFixed(2);// parseFloat(value);
    if (decimal === 1) {
      const dec1 = /^\$?[0-9]+(\.[0-9])?$/; // ^[0-9\b]+$/;
      if (value === '' || dec1.test(value)) {
        return value;
      } else return value.slice(0, -1);
    } else if (decimal === 2) {
      const dec1 = /^\$?[0-9]+(\.[0-9])?$/; // ^[0-9\b]+$/;
      const dec2 = /^\$?[0-9]+(\.[0-9][0-9])?$/; // ^[0-9\b]+$/;
  
      if (value === '' || dec1.test(value) || dec2.test(value)) {
        return value;
      } else return value.slice(0, -1);
    } else if (decimal === 3) {
      const dec1 = /^\$?[0-9]+(\.[0-9])?$/; // ^[0-9\b]+$/;
      const dec2 = /^\$?[0-9]+(\.[0-9][0-9])?$/; // ^[0-9\b]+$/;
      const dec3 = /^\$?[0-9]+(\.[0-9][0-9][0-9])?$/; // ^[0-9\b]+$/;
      if (
        value === '' ||
        dec1.test(value) ||
        dec2.test(value) ||
        dec3.test(value)
      ) {
        return value;
      } else return value.slice(0, -1);
    } else {
      const dec1 = /^\d+$/;
      if (value === '' || dec1.test(value)) {
        return value;
      }
    }
    return undefined;
  }

  export function moneyFormat(value) {
    if (!value) return '0';
  
    const strValue = value.toString();
    let newValue = '';
    if (strValue.length > 0) {
      const arr = strValue.split('.');
      let integerNumber = '';
      if (arr[0] !== null && arr[0] !== undefined) {
        integerNumber = arr[0];
        const { length } = integerNumber;
        let count = 0;
  
        for (let i = 1; i <= length; i++) {
          count++;
          if (count === 3) {
            newValue = ` ${integerNumber[length - i]}${newValue}`;
            count = 0;
          } else {
            newValue = integerNumber[length - i] + newValue;
          }
        }
        if (newValue.charAt[0] !== null && newValue.charCodeAt(0) === 32) {
          newValue = newValue.substr(1);
        }
      }
      if (arr[1] !== null && arr[1] !== undefined) {
        newValue = `${newValue}.${arr[1]}`;
      }
    }
    return newValue;
  }


  export function handleFocus(event) {
    event.target.select();
  }