alert("1.El Médano Beach     2.Black Sand Basin")
x = prompt("enter the number of beach that you want to see")





if (x == 1) {
document.write('  this   image  that   you  want   to show you from old assignment <br/><br/>')
  document.write('<img src="https://www.usnews.com/dims4/USNEWS/543934b/2147483647/resize/1200x%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F0b%2F97%2Feaa9549e423f925510656e7fb3c2%2F6-spain-beach-getty.jpg" height="100px" width="100px" /> <br/>')

}
else if (x == 2) {
document.write('  this   image  that   you  want   to show you from old assignment <br/><br/>')
  document.write('<img src="https://www.usnews.com/dims4/USNEWS/bb261e2/2147483647/resize/1200x%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F6a%2Fb3%2F3fe89a2a47f7ac8ee912fe459055%2F7-yellowstone-getty.jpg" height="100px" width="100px" /> <br/>')

}

else {
  alert('you entered incorrect value')
}
var y =prompt("enter number of images that you want to show")

while(y<0 || y>11)
  {y= prompt('please enter value betwee 1 and 10')}

for (i=0;i<y;i++)
    {  document.write('<br/>'+'<img src="https://www.usnews.com/dims4/USNEWS/df913ab/2147483647/resize/1200x%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F74%2F3f%2F6b732db34d73bdc0263f661a7963%2F10-guatemala-getty.jpg" height="100px" width="100px" />')}
