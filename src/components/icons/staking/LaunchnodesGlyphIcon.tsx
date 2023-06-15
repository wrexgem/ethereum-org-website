import React from "react"
import { createIcon } from "@chakra-ui/react"
import { commonIconDefaultProps } from "../utils"

export const LaunchnodesGlyphIcon = createIcon({
  displayName: "LaunchnodesGlyphIcon",
  viewBox: "0 0 44 44",
  defaultProps: {
    width: "44px",
    height: "44px",
    ...commonIconDefaultProps,
  },
  path: [
    <path d="M13.7983 33.4C13.6983 33.5 11.3983 36 11.4983 35.8C10.6983 36.7 9.09836 36.8 7.99836 35.9C7.99836 35.9 7.99836 35.9 7.89836 35.8C6.89836 34.9 6.79836 33.3 7.69836 32.3C7.69836 32.3 7.69836 32.2 7.79836 32.2H7.99836L9.49836 30.5L9.99836 29.9L7.39836 27.5L1.49836 34C-0.501641 37 2.09836 42.2 2.09836 42.4C10.2983 45.1 10.2983 42.2 16.3983 35.9L13.7983 33.4Z" />,
    <path d="M9.80156 9.3002C9.90156 9.3002 9.90156 9.3002 9.80156 9.3002C9.90156 9.4002 14.7016 14.5002 14.4016 14.2002L10.5016 20.6002C10.6016 20.7002 22.5016 27.8002 22.4016 27.7002C42.8016 15.6002 19.4016 29.5002 34.3016 20.6002L30.4016 14.2002C30.3016 14.1002 28.8016 11.6002 28.9016 11.7002L22.5016 0.900195L15.9016 11.8002C15.8016 11.7002 11.7016 7.3002 11.9016 7.6002C12.0016 7.5002 12.1016 7.3002 12.2016 7.2002C13.0016 5.5002 12.8016 3.5002 11.5016 2.0002L9.80156 0.200195L9.20156 0.800195L6.50156 3.3002L3.80156 5.8002L5.40156 7.5002C14.5016 -0.899804 4.80156 8.1002 10.8016 2.5002L9.40156 1.1002L10.8016 2.6002C11.8016 3.7002 12.0016 5.1002 11.5016 6.4002C11.1016 7.4002 10.2016 8.3002 9.10156 8.6002C7.80156 9.0002 6.40156 8.6002 5.40156 7.6002L3.80156 5.8002L3.10156 6.4002L4.80156 8.2002C6.10156 9.6002 8.10156 10.0002 9.80156 9.3002ZM20.9016 6.8002V14.1002C17.2016 15.8002 15.3016 16.6002 14.8016 16.9002C16.1016 14.7002 19.5016 9.1002 20.9016 6.8002Z" />,
    <path d="M43.0991 34L37.1992 27.5L34.5991 29.9L35.0991 30.5L36.5991 32.2L36.6992 32.3C36.6992 32.3 36.6991 32.3 36.7991 32.4C37.6991 33.5 37.5991 35 36.5991 35.9C36.5991 35.9 36.5992 35.9 36.4992 36C35.4992 36.9 34.0991 36.9 33.0991 36C33.0991 36 33.0992 36 32.9992 35.9L32.7991 35.6L30.7991 33.4L28.1992 35.8L34.0991 42.2C36.3991 44 40.4992 42.8 42.4992 42.3C42.4992 42.3 44.9991 37 43.0991 34Z" />,
    <path d="M37.0008 5.0002L38.6008 3.2002L35.9008 0.700195L34.3008 2.5002C34.4008 2.6002 37.2008 5.1002 37.0008 5.0002Z" />,
    <path d="M30.5989 14.3001C30.6989 14.2001 35.4989 9.0001 35.1989 9.3001C36.9989 10.0001 38.9989 9.6001 40.2989 8.1001L41.9989 6.3001L41.2989 5.7001L38.5989 3.2001L36.9989 5.0001C37.0989 5.1001 39.8989 7.7001 39.6989 7.5001C38.6989 8.5001 37.2989 8.9001 35.9989 8.5001C35.4989 8.3001 34.9989 8.1001 34.5989 7.7001C34.1989 7.3001 33.8989 6.8001 33.6989 6.3001C33.1989 5.0001 33.3989 3.6001 34.3989 2.5001L35.9989 0.700098L35.2989 0.100098L33.5989 1.9001C32.2989 3.3001 32.0989 5.4001 32.8989 7.1001C32.9989 7.2001 33.0989 7.4001 33.1989 7.5001C33.0989 7.6001 28.8989 12.1001 29.1989 11.8001C29.0989 11.9001 30.6989 14.4001 30.5989 14.3001Z" />,
    <path d="M29.4014 30.1C33.2014 34.2 34.0014 35.1 33.9014 35.1C34.0014 35.2 34.1014 35.2 34.3014 35.3H34.4014C34.6014 35.3 34.7014 35.3 34.8014 35.3C35.2014 35.3 35.5014 35.1 35.7014 34.9C36.9014 33.8 35.3014 32.4 35.6014 32.8C35.5014 32.7 30.8014 27.6 30.9014 27.7C33.9014 23.5 32.1014 26.1 34.3014 22.9C33.2014 23.5 23.4014 29.3 22.4014 29.9C22.3014 29.8 10.4014 22.8 10.5014 22.9C10.6014 23 13.8014 27.6 13.8014 27.5C12.2014 29.2 9.00138 32.7 8.90138 32.8V33L8.80138 33.1C8.30138 33.7 8.40138 34.5 8.90138 35C9.70138 35.6 10.0014 35.3 10.7014 35L10.9014 34.8C11.0014 34.7 15.5014 29.7 15.4014 29.9C17.7014 33.2 20.4014 37 22.5014 39.8C25.2014 36 28.2014 31.7 29.4014 30.1ZM20.9014 34.6C20.8014 34.5 16.3014 28.1 16.5014 28.4C16.6014 28.5 21.2014 31.2 20.9014 31V34.6Z" />,
  ],
})
