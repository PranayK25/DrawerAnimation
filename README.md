# Drawer Animation

This project contains 2 types of navigators ->

1. Stack Navigator
2. Tab Navigator

I couldn't use Drawer Navigator directly as it is always mounted on the top of the screen, thus created a custom drawer at the top level with position absolute with the list of all the items of the stack navigator.

# Structure

## ScreenContext

1. This is a ScreenContextProvider which is wrapped around the entire App which holds the value of the currently opened screen at the top level, this is done becasue we are not using the DrawerNavigator out of the box.

## Navigator

1. In the Navigator.tsx, DrawerNavigator and StackNavigator are wrapped inside the NavigatorContainer
2. "progress" is a useSHaredValue which gets updated on drawer opening and closing, and this value is further passed down to Drawer and Stack navigators.
3. Pan Gesture is also added inside this file which updates the value of "progress" according to the gestures, it also changes the position to "fully opened" or "closed" according to the current position.

## Tilt Animations

1. The value of "progress" is shared with DrawerNavigator as well as StackNavigator, on updation of this value, the animations for each of the stacks are written inside there components.
2. The StackNavigator is wrapped around using a component named "ScreenLayoutWrapper" which controls the animation

## Tab Navigator

As per mentioned in the requirements, I have added a nested bottom tab navigator for the Home and Contact components.

# Conclusion

This was a very beautiful and tricky animation to deal with, I have writted the typescripts for the files, included the basic folder structure, used Remix Icons for the icons, added support for different screen sizes and maintained all the StyleSheets.
