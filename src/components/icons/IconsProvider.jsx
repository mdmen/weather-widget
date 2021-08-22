// @flow
import React from 'react';

type Props = {
  children: React$Node,
};

export const IconsProvider = ({ children }: Props): React$Node => (
  <>
    <svg
      aria-hidden="true"
      className="visually-hidden"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <symbol id="icon-wind" viewBox="0 0 32 32">
          <path d="M25 4c-2.761 0-5 2.239-5 5v0c0 0.552-0.448 1-1 1s-1-0.448-1-1v0c0-3.866 3.134-7 7-7s7 3.134 7 7c0 3.866-3.134 7-7 7v0h-24c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h24c2.761 0 5-2.239 5-5s-2.239-5-5-5v0zM11 6c-1.105 0-2 0.895-2 2v0c0 0.552-0.448 1-1 1s-1-0.448-1-1v0c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4v0h-10c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h10c1.105 0 2-0.895 2-2s-0.895-2-2-2v0zM0 19c0-0.552 0.448-1 1-1v0h20.084c3.314 0 6 2.686 6 6s-2.686 6-6 6c-3.314 0-6-2.686-6-6v0c0-0.552 0.448-1 1-1s1 0.448 1 1v0c0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.209-1.791-4-4-4v0h-20.084c-0.552 0-1-0.448-1-1v0z"></path>
        </symbol>
        <symbol id="icon-water" viewBox="0 0 32 32">
          <path d="M0.062 5.786c0.152-0.371 0.51-0.628 0.928-0.628 0.134 0 0.262 0.026 0.379 0.074l-0.007-0.002 3.514 1.406c0.33 0.136 0.713 0.215 1.114 0.215s0.784-0.079 1.134-0.222l-0.020 0.007 2.028-0.812c0.55-0.226 1.188-0.358 1.857-0.358s1.307 0.131 1.89 0.37l-0.033-0.012 2.030 0.812c0.33 0.136 0.713 0.215 1.114 0.215s0.784-0.079 1.134-0.222l-0.020 0.007 2.028-0.812c0.55-0.226 1.188-0.358 1.857-0.358s1.307 0.131 1.89 0.37l-0.033-0.012 2.030 0.812c0.33 0.136 0.713 0.215 1.114 0.215s0.784-0.079 1.134-0.222l-0.020 0.007 3.514-1.406c0.115-0.050 0.25-0.080 0.391-0.080 0.552 0 1 0.448 1 1 0 0.426-0.266 0.789-0.64 0.933l-0.007 0.002-3.516 1.406c-0.55 0.226-1.188 0.358-1.857 0.358s-1.307-0.131-1.89-0.37l0.033 0.012-2.028-0.812c-0.33-0.136-0.713-0.215-1.114-0.215s-0.784 0.079-1.134 0.222l0.020-0.007-2.030 0.812c-0.55 0.226-1.188 0.358-1.857 0.358s-1.307-0.131-1.89-0.37l0.033 0.012-2.028-0.812c-0.33-0.136-0.713-0.215-1.114-0.215s-0.784 0.079-1.134 0.222l0.020-0.007-2.030 0.812c-0.55 0.226-1.188 0.358-1.857 0.358s-1.307-0.131-1.89-0.37l0.033 0.012-3.514-1.406c-0.371-0.152-0.628-0.51-0.628-0.928 0-0.134 0.026-0.262 0.074-0.379l-0.002 0.007zM0.062 11.786c0.152-0.371 0.51-0.628 0.928-0.628 0.134 0 0.262 0.026 0.379 0.074l-0.007-0.002 3.514 1.406c0.33 0.136 0.713 0.214 1.114 0.214s0.784-0.079 1.134-0.222l-0.020 0.007 2.028-0.812c0.55-0.226 1.188-0.358 1.857-0.358s1.307 0.131 1.89 0.37l-0.033-0.012 2.030 0.812c0.33 0.136 0.713 0.214 1.114 0.214s0.784-0.079 1.134-0.222l-0.020 0.007 2.028-0.812c0.55-0.226 1.188-0.358 1.857-0.358s1.307 0.131 1.89 0.37l-0.033-0.012 2.030 0.812c0.33 0.136 0.713 0.214 1.114 0.214s0.784-0.079 1.134-0.222l-0.020 0.007 3.514-1.406c0.115-0.050 0.25-0.080 0.391-0.080 0.552 0 1 0.448 1 1 0 0.426-0.266 0.789-0.64 0.933l-0.007 0.002-3.516 1.406c-0.55 0.226-1.188 0.358-1.857 0.358s-1.307-0.131-1.89-0.37l0.033 0.012-2.028-0.812c-0.33-0.136-0.713-0.214-1.114-0.214s-0.784 0.079-1.134 0.222l0.020-0.007-2.030 0.812c-0.55 0.226-1.188 0.358-1.857 0.358s-1.307-0.131-1.89-0.37l0.033 0.012-2.028-0.812c-0.33-0.136-0.713-0.214-1.114-0.214s-0.784 0.079-1.134 0.222l0.020-0.007-2.030 0.812c-0.55 0.226-1.188 0.358-1.857 0.358s-1.307-0.131-1.89-0.37l0.033 0.012-3.514-1.406c-0.371-0.152-0.628-0.51-0.628-0.928 0-0.134 0.026-0.262 0.074-0.379l-0.002 0.007zM0.062 17.786c0.152-0.371 0.51-0.628 0.928-0.628 0.134 0 0.262 0.026 0.379 0.074l-0.007-0.002 3.514 1.406c0.33 0.136 0.713 0.215 1.114 0.215s0.784-0.079 1.134-0.222l-0.020 0.007 2.028-0.812c0.55-0.226 1.188-0.358 1.857-0.358s1.307 0.131 1.89 0.37l-0.033-0.012 2.030 0.812c0.33 0.136 0.713 0.215 1.114 0.215s0.784-0.079 1.134-0.222l-0.020 0.007 2.028-0.812c0.55-0.226 1.188-0.358 1.857-0.358s1.307 0.131 1.89 0.37l-0.033-0.012 2.030 0.812c0.33 0.136 0.713 0.215 1.114 0.215s0.784-0.079 1.134-0.222l-0.020 0.007 3.514-1.406c0.115-0.050 0.25-0.080 0.391-0.080 0.552 0 1 0.448 1 1 0 0.426-0.266 0.789-0.64 0.933l-0.007 0.002-3.516 1.406c-0.55 0.226-1.188 0.358-1.857 0.358s-1.307-0.131-1.89-0.37l0.033 0.012-2.028-0.812c-0.33-0.136-0.713-0.215-1.114-0.215s-0.784 0.079-1.134 0.222l0.020-0.007-2.030 0.812c-0.55 0.226-1.188 0.358-1.857 0.358s-1.307-0.131-1.89-0.37l0.033 0.012-2.028-0.812c-0.33-0.136-0.713-0.215-1.114-0.215s-0.784 0.079-1.134 0.222l0.020-0.007-2.030 0.812c-0.55 0.226-1.188 0.358-1.857 0.358s-1.307-0.131-1.89-0.37l0.033 0.012-3.514-1.406c-0.371-0.152-0.628-0.51-0.628-0.928 0-0.134 0.026-0.262 0.074-0.379l-0.002 0.007zM0.062 23.786c0.152-0.371 0.51-0.628 0.928-0.628 0.134 0 0.262 0.026 0.379 0.074l-0.007-0.002 3.514 1.406c0.33 0.136 0.713 0.215 1.114 0.215s0.784-0.079 1.134-0.222l-0.020 0.007 2.028-0.812c0.55-0.226 1.188-0.358 1.857-0.358s1.307 0.131 1.89 0.37l-0.033-0.012 2.030 0.812c0.33 0.136 0.713 0.215 1.114 0.215s0.784-0.079 1.134-0.222l-0.020 0.007 2.028-0.812c0.55-0.226 1.188-0.358 1.857-0.358s1.307 0.131 1.89 0.37l-0.033-0.012 2.030 0.812c0.33 0.136 0.713 0.215 1.114 0.215s0.784-0.079 1.134-0.222l-0.020 0.007 3.514-1.406c0.115-0.050 0.25-0.080 0.391-0.080 0.552 0 1 0.448 1 1 0 0.426-0.266 0.789-0.64 0.933l-0.007 0.002-3.516 1.406c-0.55 0.226-1.188 0.358-1.857 0.358s-1.307-0.131-1.89-0.37l0.033 0.012-2.028-0.812c-0.33-0.136-0.713-0.215-1.114-0.215s-0.784 0.079-1.134 0.222l0.020-0.007-2.030 0.812c-0.55 0.226-1.188 0.358-1.857 0.358s-1.307-0.131-1.89-0.37l0.033 0.012-2.028-0.812c-0.33-0.136-0.713-0.215-1.114-0.215s-0.784 0.079-1.134 0.222l0.020-0.007-2.030 0.812c-0.55 0.226-1.188 0.358-1.857 0.358s-1.307-0.131-1.89-0.37l0.033 0.012-3.514-1.406c-0.371-0.152-0.628-0.51-0.628-0.928 0-0.134 0.026-0.262 0.074-0.379l-0.002 0.007z"></path>
        </symbol>
        <symbol id="icon-speedometer2" viewBox="0 0 32 32">
          <path d="M16 7.952c0.552 0 1 0.448 1 1v0 3c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-3c0-0.552 0.448-1 1-1v0zM7.464 11.416c0.181-0.181 0.431-0.293 0.707-0.293s0.526 0.112 0.707 0.293l1.83 1.828c0.181 0.181 0.293 0.431 0.293 0.708 0 0.553-0.448 1.001-1.001 1.001-0.277 0-0.527-0.112-0.708-0.293v0l-1.828-1.83c-0.181-0.181-0.293-0.431-0.293-0.707s0.112-0.526 0.293-0.707v0zM4 19.952c0-0.552 0.448-1 1-1v0h3.172c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-3.172c-0.552 0-1-0.448-1-1v0zM23 19.952c0-0.552 0.448-1 1-1v0h3c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-3c-0.552 0-1-0.448-1-1v0zM24.508 11.46c-0.141-0.14-0.335-0.226-0.549-0.226-0.193 0-0.37 0.071-0.506 0.187l0.001-0.001-8.36 7.152c-0.397 0.336-0.647 0.835-0.647 1.392 0 1.005 0.815 1.82 1.82 1.82 0.579 0 1.095-0.27 1.428-0.692l0.003-0.004 6.868-8.594c0.106-0.132 0.17-0.301 0.17-0.486 0-0.215-0.087-0.41-0.228-0.55v0z"></path>
          <path d="M0 19.952c0.008-8.83 7.168-15.986 16-15.986 8.837 0 16 7.163 16 16 0 1.902-0.332 3.727-0.941 5.419l0.035-0.112c-0.884 2.506-3.69 3.204-5.864 2.5-2.612-0.846-6.28-1.822-9.23-1.822-2.948 0-6.62 0.976-9.23 1.822-2.174 0.704-4.98 0.006-5.864-2.5-0.574-1.58-0.906-3.403-0.906-5.304 0-0.006 0-0.013 0-0.019v0.001zM16 5.952c-0.001 0-0.002 0-0.004 0-7.732 0-14 6.268-14 14 0 1.67 0.292 3.271 0.828 4.756l-0.031-0.098c0.406 1.15 1.846 1.752 3.36 1.26 2.64-0.852 6.562-1.918 9.846-1.918s7.208 1.064 9.846 1.92c1.514 0.49 2.954-0.112 3.36-1.262 0.505-1.387 0.798-2.988 0.798-4.658 0-7.732-6.268-14-14-14-0.001 0-0.003 0-0.004 0h0z"></path>
        </symbol>
        <symbol id="icon-moisture" viewBox="0 0 32 32">
          <path d="M25 0c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h3v5.5h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h1v5.5h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h3v5.5h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h1v5.5h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0-30c0-0.552-0.448-1-1-1v0h-4zM12 3l0.728-0.686c-0.183-0.194-0.441-0.314-0.728-0.314s-0.545 0.121-0.728 0.314l-0 0.001-0.004 0.004-0.012 0.014-0.044 0.046-0.16 0.176c-0.822 0.909-1.656 1.897-2.456 2.912l-0.092 0.122c-1.538 1.966-3.428 4.65-4.77 7.454-0.998 2.086-1.734 4.322-1.734 6.424 0 5.762 4.424 10.534 10 10.534s10-4.772 10-10.534c0-2.1-0.736-4.338-1.734-6.424-1.342-2.804-3.232-5.488-4.77-7.454-0.94-1.198-1.826-2.243-2.749-3.255l0.041 0.045-0.044-0.046-0.012-0.014-0.004-0.002-0.728 0.684zM12 3v0zM11.968 4.532l0.032-0.038 0.032 0.038c0.48 0.548 1.144 1.334 1.888 2.288 1.222 1.562 2.64 3.552 3.802 5.654h-11.442c1.16-2.102 2.58-4.092 3.8-5.654 0.746-0.954 1.412-1.74 1.89-2.288zM4 19.466c0-1.51 0.488-3.224 1.276-4.992h13.448c0.79 1.768 1.276 3.482 1.276 4.992 0 4.768-3.636 8.534-8 8.534s-8-3.766-8-8.534z"></path>
        </symbol>
        <symbol id="icon-eye" viewBox="0 0 32 32">
          <path d="M32 16s-6-11-16-11-16 11-16 11 6 11 16 11 16-11 16-11zM2.346 16c1.016-1.532 2.109-2.869 3.321-4.087l-0.001 0.001c2.574-2.578 6.094-4.914 10.334-4.914s7.758 2.336 10.336 4.914c1.211 1.217 2.304 2.554 3.26 3.99l0.060 0.096c-0.116 0.174-0.244 0.366-0.39 0.576-0.67 0.96-1.66 2.24-2.93 3.51-2.578 2.578-6.098 4.914-10.336 4.914-4.24 0-7.758-2.336-10.336-4.914-1.211-1.217-2.304-2.554-3.26-3.99l-0.060-0.096z"></path>
          <path d="M16 11c-2.761 0-5 2.239-5 5s2.239 5 5 5v0c2.761 0 5-2.239 5-5s-2.239-5-5-5v0zM9 16c0-3.866 3.134-7 7-7s7 3.134 7 7v0c0 3.866-3.134 7-7 7s-7-3.134-7-7v0z"></path>
        </symbol>
      </defs>
    </svg>
    {children}
  </>
);