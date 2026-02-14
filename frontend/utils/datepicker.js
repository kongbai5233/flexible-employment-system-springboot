const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`;
};

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
};

// 获取当前时间
function getCurrentDate() {
  let date = new Date();   
  let currentYear = date.getFullYear();
  let currentMonth = date.getMonth() + 1;
  let currentDay = date.getDate();
  let currentHour = date.getHours();
  let currentMinute = date.getMinutes();

  let year = [currentYear].map(formatNumber);
  let mm = [currentMonth].map(formatNumber);
  let dd = [currentDay].map(formatNumber);
  let hh = [currentHour].map(formatNumber);
  let min = [currentMinute].map(formatNumber);

  return `${year}-${mm}-${dd} ${hh}:${min}`; // 2023-08-23 09:43
}

// 获取picker的选中设置
function GetMultiIndex() {
  let arr = loadPickerData();
  let date = new Date();   
  let currentYear = date.getFullYear();
  let currentMonth = date.getMonth() + 1;
  let currentDay = date.getDate();
  let currentHour = date.getHours();
  let currentMinute = date.getMinutes();

  let yearIndex = 0;
  let monthIndex = 0;
  let dayIndex = 0;
  let hoursIndex = 0;
  let minuteIndex = 0;

  arr.forEach((item, index) => {
    switch (index) {
      case 0:
        currentYear = currentYear + '年';
        yearIndex = item.indexOf(currentYear);
        break;
      case 1:
        currentMonth = [currentMonth].map(formatNumber) + '月';
        monthIndex = item.indexOf(currentMonth);
        break;
      case 2:
        currentDay = [currentDay].map(formatNumber) + '日';
        dayIndex = item.indexOf(currentDay);
        break;
      case 3:
        currentHour = [currentHour].map(formatNumber) + '时';
        hoursIndex = item.indexOf(currentHour);
        break;
      case 4:
        currentMinute = [currentMinute].map(formatNumber) + '分';
        minuteIndex = item.indexOf(currentMinute);
        break;
      default:
        break;
    }
  });

  // 返回picker的初始选中项
  return [yearIndex, monthIndex, dayIndex, hoursIndex, minuteIndex];
}

// 获取年份
function loadYears(startYear, endYear) {
  let years = [];
  for (let i = startYear; i <= endYear; i++) {
    years.push(i + "年");
  }
  return years; // 返回年份数组
}

// 获取月份
function loadMonths(startMonth, endMonth) {
  let months = [];
  for (let i = startMonth; i <= endMonth; i++) {
    if (i < 10) i = "0" + i;
    months.push(i + "月");
  }
  return months; // 返回月份数组
}

// 获取日期
function loadDays(yearSelected, selectedMonth, startDay) {
  let days = [];
  let daysInMonth;

  // 判断月份天数
  if (selectedMonth === 1 || selectedMonth === 3 || selectedMonth === 5 || selectedMonth === 7 || selectedMonth === 8 || selectedMonth === 10 || selectedMonth === 12) {
    daysInMonth = 31;
  } else if (selectedMonth === 4 || selectedMonth === 6 || selectedMonth === 9 || selectedMonth === 11) {
    daysInMonth = 30;
  } else if (selectedMonth === 2) {
    // 判断是否为闰年
    let isLeapYear = (yearSelected % 4 === 0 && yearSelected % 100 !== 0) || (yearSelected % 400 === 0);
    daysInMonth = isLeapYear ? 29 : 28;
  }

  // 生成日期数组
  for (let i = startDay; i <= daysInMonth; i++) {
    if (i < 10) i = "0" + i;
    days.push(i + "日");
  }

  return days; // 返回日期数组
}

// 获取小时
function loadHours(startHour, endHour) {
  let hours = [];
  for (let i = startHour; i < endHour; i++) {
    if (i < 10) i = "0" + i;
    hours.push(i + "时");
  }
  return hours; // 返回小时数组
}

// 获取分钟
function loadMinutes(startMinute, endMinute) {
  let minutes = [];
  for (let i = startMinute; i < endMinute; i++) {
    if (i < 10) i = "0" + i;
    minutes.push(i + "分");
  }
  return minutes; // 返回分钟数组
}

// 获取picker的初始数据
function loadPickerData() {
  let date1 = new Date();   
  let currentYear = date1.getFullYear();
  let currentMonth = date1.getMonth() + 1;
  let currentDay = date1.getDate();
  let currentHour = date1.getHours();
  let currentMinute = date1.getMinutes();

  let years = loadYears(currentYear - 2, date1.getFullYear() + 100); // 设置起始年份为两年前
  let months = loadMonths(1, 12);
  let days = loadDays(currentYear, currentMonth, 1);
  let hours = loadHours(0, 24);
  let minutes = loadMinutes(0, 60);

  return [years, months, days, hours, minutes];
}

module.exports = {
  loadPickerData: loadPickerData,
  getCurrentDate: getCurrentDate,
  GetMultiIndex: GetMultiIndex,
  loadYears: loadYears,
  loadMonths: loadMonths,
  loadDays: loadDays,
  loadHours: loadHours,
  loadMinutes: loadMinutes,
  formatTime: formatTime
};
