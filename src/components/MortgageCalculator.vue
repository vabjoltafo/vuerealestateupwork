<template>
  <div
    class="z-50 fixed inset-0 flex justify-center items-center overflow-y-scroll pt-48 pb-4"
  >
    <div class="modal bg-white px-4 py-2 w-2/4">
      <button @click="modal" class="float-right mb-4">
        <i class="fas fa-times"></i>
      </button>
      <br />
      <div class="flex flex-row justify-center items-center">
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTggNTgiIHdpZHRoPSI1MTIiIHN0eWxlPSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bzsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIj4KICAgIDxnIGlkPSJQYWdlLTEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjAyMy0tLUhvdXNlLUZpbmFuY2UtRG9jdW1lbnRzIj4KICAgICAgICAgICAgPHBhdGggaWQ9IlBhdGgiIGQ9Im0zMiA1OGgtMjZjLTEuMTAzMjAxODctLjAwMzI5NDgtMS45OTY3MDUyLS44OTY3OTgxLTItMnYtMmwyNi0zeiIgZmlsbD0iI2U1N2UyNSIgc3R5bGU9IgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjNzU3NjdBOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggaWQ9IlBhdGgiIGQ9Im00MiAxMnY4bC02IDEgMi0xMWgyYzEuMTAzMjAxOS4wMDMyOTQ4IDEuOTk2NzA1Mi44OTY3OTgxIDIgMnoiIGZpbGw9IiNlNTdlMjUiIHN0eWxlPSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogIzc1NzY3QTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGlkPSJQYXRoIiBkPSJtMzAgNTRoLTI4Yy0xLjEwMzIwMTg3LS4wMDMyOTQ4LTEuOTk2NzA1Mi0uODk2Nzk4MS0yLTJ2LTQ0Yy4wMDMyOTQ4LTEuMTAzMjAxODcuODk2Nzk4MTMtMS45OTY3MDUyIDItMmgzNGMxLjEwMzIwMTkuMDAzMjk0OCAxLjk5NjcwNTIuODk2Nzk4MTMgMiAydjEyeiIgZmlsbD0iI2YyOWMxZiIgc3R5bGU9IgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjZmZjNDRiOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjZmZjNDRiOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggaWQ9IlBhdGgiIGQ9Im0zMSA2djNjMCAuNTUyMjg0NzUtLjQ0NzcxNTMgMS0xIDFoLTIyYy0uNTUyMjg0NzUgMC0xLS40NDc3MTUyNS0xLTF2LTNjLjAwMzI5NDgtMS4xMDMyMDE4Ny44OTY3OTgxMy0xLjk5NjcwNTIgMi0yaDJ2LTJjLjAwMzI5NDgtMS4xMDMyMDE4Ny44OTY3OTgxLTEuOTk2NzA1MiAyLTJoMTJjMS4xMDMyMDE5LjAwMzI5NDggMS45OTY3MDUyLjg5Njc5ODEzIDIgMnYyaDJjMS4xMDMyMDE5LjAwMzI5NDggMS45OTY3MDUyLjg5Njc5ODEzIDIgMnoiIGZpbGw9IiNiZGMzYzciIHN0eWxlPSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogIzUxNTA1MDsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogIzc1NzY3QTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGlkPSJQYXRoIiBkPSJtMjEgNmgtNGMtLjU1MjI4NDcgMC0xLS40NDc3MTUyNS0xLTFzLjQ0NzcxNTMtMSAxLTFoNGMuNTUyMjg0NyAwIDEgLjQ0NzcxNTI1IDEgMXMtLjQ0NzcxNTMgMS0xIDF6IiBmaWxsPSIjN2Y4YzhkIiBzdHlsZT0iCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGZpbGw6ICM3NTc2N0E7ICovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICM1MTUwNTA7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBpZD0iUGF0aCIgZD0ibTI2IDQ0aC0yMmMtLjU1MjI4NDc1IDAtMS0uNDQ3NzE1My0xLTFzLjQ0NzcxNTI1LTEgMS0xaDIyYy41NTIyODQ3IDAgMSAuNDQ3NzE1MyAxIDFzLS40NDc3MTUzIDEtMSAxeiIgZmlsbD0iI2Y5ZWFiMCIgc3R5bGU9IgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjNzU3NjdBOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggaWQ9IlBhdGgiIGQ9Im0xNSA0OGgtMTFjLS41NTIyODQ3NSAwLTEtLjQ0NzcxNTMtMS0xcy40NDc3MTUyNS0xIDEtMWgxMWMuNTUyMjg0NyAwIDEgLjQ0NzcxNTMgMSAxcy0uNDQ3NzE1MyAxLTEgMXoiIGZpbGw9IiNmOWVhYjAiIHN0eWxlPSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogIzc1NzY3QTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIj48L3BhdGg+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiM0NDgyYzMiIGhlaWdodD0iMzgiIHJ4PSIyIiB3aWR0aD0iMjgiIHg9IjMwIiB5PSIyMCIgc3R5bGU9IgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjNTE1MDUwOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiPjwvcmVjdD4KICAgICAgICAgICAgPHBhdGggaWQ9IlJlY3RhbmdsZSIgZD0ibTM0IDI0aDIwdjZoLTIweiIgZmlsbD0iIzI4NTY4MCI+PC9wYXRoPgogICAgICAgICAgICA8ZyBmaWxsPSIjZjBjNDE5IiBzdHlsZT0iCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNmZmM0NGI7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGZpbGw6ICNmNWY0ZjQ7ICovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICI+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBoZWlnaHQ9IjQiIHJ4PSIxIiB3aWR0aD0iNCIgeD0iMzQiIHk9IjM0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBoZWlnaHQ9IjQiIHJ4PSIxIiB3aWR0aD0iNCIgeD0iMzQiIHk9IjQyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBoZWlnaHQ9IjQiIHJ4PSIxIiB3aWR0aD0iNCIgeD0iMzQiIHk9IjUwIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBoZWlnaHQ9IjQiIHJ4PSIxIiB3aWR0aD0iNCIgeD0iNDIiIHk9IjM0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBoZWlnaHQ9IjQiIHJ4PSIxIiB3aWR0aD0iNCIgeD0iNDIiIHk9IjQyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBoZWlnaHQ9IjQiIHJ4PSIxIiB3aWR0aD0iNCIgeD0iNDIiIHk9IjUwIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBoZWlnaHQ9IjQiIHJ4PSIxIiB3aWR0aD0iNCIgeD0iNTAiIHk9IjM0Ij48L3JlY3Q+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI2YyOWMxZiIgaGVpZ2h0PSIxMiIgcng9IjEiIHdpZHRoPSI0IiB4PSI1MCIgeT0iNDIiPjwvcmVjdD4KICAgICAgICAgICAgPHBhdGggaWQ9IlBhdGgiIGQ9Im0yNCAxNnY3bC00LTMuMjN2LTMuNzdjMC0uNTUyMjg0Ny40NDc3MTUzLTEgMS0xaDJjLjU1MjI4NDcgMCAxIC40NDc3MTUzIDEgMXoiIGZpbGw9IiNjMDNhMmIiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggaWQ9IlBhdGgiIGQ9Im04IDM5Yy0xLjEwMzIwMTg3LS4wMDMyOTQ4LTEuOTk2NzA1Mi0uODk2Nzk4MS0yLTJ2LTExLjg3bDktNy4xMyA5IDcuMTN2MTEuODdjLS4wMDMyOTQ4IDEuMTAzMjAxOS0uODk2Nzk4MSAxLjk5NjcwNTItMiAyeiIgZmlsbD0iI2VjZjBmMSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBpZD0iUGF0aCIgZD0ibTI2Ljc2OSAyNS4wOS0xLjI4IDEuNTRjLS4zNTQ1OTA3LjQyODY2NjQtLjk4ODUyNDQuNDkxMTY2OS0xLjQyLjE0bC0uMDY5LS4wNi05LTcuMTMtOSA3LjEzLS4wNy4wNmMtLjQzMTQ3NTYzLjM1MTE2NjktMS4wNjU0MDkzNS4yODg2NjY0LTEuNDItLjE0bC0xLjI4LTEuNTRjLS4xNzEwMDAzMS0uMjA0NDcyOC0uMjUyNTE4MDEtLjQ2OTE1OTgtLjIyNjE4MTMxLS43MzQ0MDgxLjAyNjMzNjcxLS4yNjUyNDgyLjE1ODMxMTYyLS41MDg3Mzc0LjM2NjE4MTMxLS42NzU1OTE5bDEwLjk5LTguODljLjM3Mzk2OS0uMjk5ODk1Ni45MDYwMzEtLjI5OTg5NTYgMS4yOCAwbDQuMzYgMy41MyA0IDMuMjMgMi42MyAyLjEzYy4yMDc3MjE2LjE2Njk5OTkuMzM5NTAzOS40MTA1NjI1LjM2NTY1MTkuNjc1ODA0OXMtLjA1NTUzODIuNTI5ODQ5LS4yMjY2NTE5LjczNDE5NTF6IiBmaWxsPSIjZTY0YzNjIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGlkPSJQYXRoIiBkPSJtMTggMzN2NmgtNnYtNmMuMDAzMjk0OC0xLjEwMzIwMTkuODk2Nzk4MS0xLjk5NjcwNTIgMi0yaDJjMS4xMDMyMDE5LjAwMzI5NDggMS45OTY3MDUyLjg5Njc5ODEgMiAyeiIgZmlsbD0iI2NiODI1MiI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
          alt="Mortgage Calculator"
          class=" w-9 h-9"
        />
        <h2 class="ml-3 text-2xl font-bold">
          Mortgage Calculator
        </h2>
      </div>

      <div class="mt-8">
        <h2
          class="bg-darkGray text-dYellow text-center text-md font-bold rounded-t-lg py-3"
        >
          Payment Plan
        </h2>
        <div class="border-2 border-darkGray pt-4">
          <form @submit.prevent="calculate" class="mx-4">
            <div class="flex flow-row flex-wrap justify-evenly mb-4">
              <div class="flex flex-col gap-2">
                <label for="homePrice" class="font-bold">Home Price</label>
                <div class="flex relative flex-wrap items-stretch">
                  <span
                    class="flex bg-darkGray text-dYellow items-center px-2 py-1 rounded-tl-md rounded-bl-md"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 288 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="number"
                    class="border-2 border-darkGray px-1 w-60 rounded-tr-md rounded-br-md"
                    v-model.number="homePrice"
                  />
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <label for="interestRate" class="font-bold"
                  >Interest Rate</label
                >
                <div class="flex relative flex-wrap items-stretch">
                  <input
                    type="number"
                    class="border-2 border-darkGray px-1 w-60 rounded-tl-md rounded-bl-md"
                    v-model.number="interestRate"
                  />
                  <span
                    class="flex bg-darkGray text-dYellow items-center px-2 py-1 rounded-tr-md rounded-br-md"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M855.7 210.8l-42.4-42.4a8.03 8.03 0 0 0-11.3 0L168.3 801.9a8.03 8.03 0 0 0 0 11.3l42.4 42.4c3.1 3.1 8.2 3.1 11.3 0L855.6 222c3.2-3 3.2-8.1.1-11.2zM304 448c79.4 0 144-64.6 144-144s-64.6-144-144-144-144 64.6-144 144 64.6 144 144 144zm0-216c39.7 0 72 32.3 72 72s-32.3 72-72 72-72-32.3-72-72 32.3-72 72-72zm416 344c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144-64.6-144-144-144zm0 216c-39.7 0-72-32.3-72-72s32.3-72 72-72 72 32.3 72 72-32.3 72-72 72z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div class="flex flex-row justify-evenly mb-4">
              <div class="flex flex-col gap-2">
                <label for="amortRate" class="font-bold"
                  >Amortization Rate</label
                >
                <div class="flex relative flex-wrap items-stretch">
                  <input
                    type="number"
                    class="border-2 border-darkGray px-1 w-56 rounded-tl-md rounded-bl-md"
                    v-model.number="amortRate"
                  /><span class="px-2 py-0.5 bg-darkGray text-dYellow rounded-tr-md rounded-br-md"
                    >Years</span
                  >
                </div>
              </div>
              <input
                type="range"
                class="mt-6"
                min="1"
                max="30"
                step="1"
                v-model="amortRate"
              />
            </div>
            <div class="flex flex-row justify-evenly mb-4">
              <div class="flex flex-col gap-2">
                <label for="downPay" class="font-bold">Down Payment</label>
                <div class="flex relative flex-wrap items-stretch">
                  <span
                    class="flex bg-darkGray text-dYellow items-center px-2 py-1 rounded-tl-md rounded-bl-md"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 288 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="number"
                    class="border-2 border-darkGray px-1 w-60 rounded-tr-md rounded-br-md"
                    :value="downPay"
                    @change="updateDownPayRate"
                  />
                </div>
              </div>
              <div class="flex relative flex-wrap items-stretch">
                <input
                  type="number"
                  class="border-2 border-darkGray px-1 h-7 mt-8 w-60 rounded-tl-md rounded-bl-md"
                  :value="downPayRate"
                  @change="updateDownPay"
                />
                <span
                  class="flex bg-darkGray text-dYellow items-center px-2 py-1 h-7 mt-8 rounded-tr-md rounded-br-md"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M855.7 210.8l-42.4-42.4a8.03 8.03 0 0 0-11.3 0L168.3 801.9a8.03 8.03 0 0 0 0 11.3l42.4 42.4c3.1 3.1 8.2 3.1 11.3 0L855.6 222c3.2-3 3.2-8.1.1-11.2zM304 448c79.4 0 144-64.6 144-144s-64.6-144-144-144-144 64.6-144 144 64.6 144 144 144zm0-216c39.7 0 72 32.3 72 72s-32.3 72-72 72-72-32.3-72-72 32.3-72 72-72zm416 344c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144-64.6-144-144-144zm0 216c-39.7 0-72-32.3-72-72s32.3-72 72-72 72 32.3 72 72-32.3 72-72 72z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div class="text-center mb-4">
              <input
                type="submit"
                value="Calculate"
                class=" bg-darkGray text-dYellow px-3 py-1 rounded-md uppercase font-bold"
              />
            </div>
          </form>
          <hr class="border border-darkGray opacity-10 mx-4" />
          <h2 class="text-xl font-bold text-center mt-4">Payment Breakdown</h2>
          <div class="flex flex-row justify-evenly mt-4">
            <div class="mortgage-chart-container h-1/3 w-1/3 py-4">
              <svg
                class="CircularProgressbar"
                viewBox="0 0 100 100"
                data-test-id="CircularProgressbar"
              >
                <path
                  class="CircularProgressbar-trail"
                  style="stroke: rgb(81, 80, 80); stroke-dasharray: 50px, 289.027px; stroke-dashoffset: 0px;"
                  d="
      M 50,50
      m 0,-46
      a 46,46 0 1 1 0,92
      a 46,46 0 1 1 0,-92
    "
                  stroke-width="8"
                  fill-opacity="0"
                ></path>
                <path
                  class="CircularProgressbar-path"
                  style="stroke: rgb(255, 196, 75); transition: none 0s ease 0s; stroke-dasharray: 289.027px, 289.027px; stroke-dashoffset: 0px;"
                  d="
      M 50,50
      m 0,-46
      a 46,46 0 1 1 0,92
      a 46,46 0 1 1 0,-92
    "
                  stroke-width="8"
                  fill-opacity="0"
                ></path>
                <text
                  style="fill: rgb(81, 80, 80); font-size: 11px;"
                  x="50%"
                  y="50%"
                  text-anchor="middle"
                >
                  ${{ this.princip }}
                </text>
              </svg>
              <div class="text-center mt-2">Mortgage amount</div>
            </div>
            <div class="mortgage-chart-container h-1/3 w-1/3 py-4">
              <svg
                class="CircularProgressbar "
                viewBox="0 0 100 100"
                data-test-id="CircularProgressbar"
              >
                <path
                  class="CircularProgressbar-trail"
                  style="stroke: rgb(255, 196, 75); stroke-dasharray: 289.027px, 289.027px; stroke-dashoffset: 0px;"
                  d="
      M 50,50
      m 0,-46
      a 46,46 0 1 1 0,92
      a 46,46 0 1 1 0,-92
    "
                  stroke-width="8"
                  fill-opacity="0"
                ></path>
                <path
                  class="CircularProgressbar-path"
                  style="stroke: rgb(81, 80, 80); transition: none 0s ease 0s; stroke-dasharray: 289.027px, 289.027px; stroke-dashoffset: 0px;"
                  d="
      M 50,50
      m 0,-46
      a 46,46 0 1 1 0,92
      a 46,46 0 1 1 0,-92
    "
                  stroke-width="8"
                  fill-opacity="0"
                ></path>
                <text
                  class="CircularProgressbar-text"
                  style="fill: rgb(81, 80, 80); font-size: 11px;"
                  x="50%"
                  y="50%"
                  text-anchor="middle"
                >
                  ${{ this.monthlyPay.toFixed(0) }}
                </text>
              </svg>
              <div class="text-center mt-2">Monthly payment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homePrice: 0,
      interestRate: 0,
      amortRate: 0,
      monthlyPayment: 0,
      downPay: 0,
      princip: 0,
      monthlyPay: 0,
    };
  },
  methods: {
    updateDownPay(event) {
      this.downPayRate = event.target.value;
      this.downPay = (this.downPayRate * this.homePrice) / 100;
    },
    updateDownPayRate(event) {
      this.downPay = event.target.value;
      this.downPayRate = (this.downPay / this.homePrice) * 100;
    },
    modal() {
      this.$emit("modal");
    },
    calculate() {
      if (!this.formValid) {
        return;
      }
      this.monthlyPay = this.payment;
      this.princip = this.principal;
    },
  },
  computed: {
    downPayment() {
      return this.downPayRate * 100;
    },
    downPaymentRate() {
      return this.downPay / 100;
    },
    formValid() {
      const { homePrice, interestRate, amortRate, downPay } = this;
      return (
        +homePrice >= 0 &&
        0 <= +interestRate &&
        +interestRate <= 100 &&
        +amortRate > 0 &&
        +downPay > 0
      );
    },
    principal() {
      return this.homePrice - this.downPay;
    },
    numPayments() {
      return this.amortRate * 12;
    },
    interestPerPay() {
      return this.interestRate / 100 / 12;
    },
    payment() {
      let temp = Math.pow(1 + this.interestPerPay, this.numPayments);
      let p = (this.principal * this.interestPerPay * temp) / (temp - 1);
      return p;
    },
    amortPay() {
      var yearEndPrincipal = [];
      var principal = this.principal;
      var interestPortion;
      for (var y = 0; y < this.amortization; y++) {
        for (var p = 0; p < this.numPaymentsPerYear; p++) {
          interestPortion = principal * this.interestPerPayment; // portion of payment paying down interest
          principal = principal - (this.payment - interestPortion);
        }
        principal = principal > 0 ? principal : 0;
        yearEndPrincipal.push({
          principal,
          interestPortion,
        });
      }
      return yearEndPrincipal;
    },
    totalCostOfMortgage() {
      return this.payment * this.numPayments;
    },
    interestPaid() {
      return this.totalCostOfMortgage - this.principal;
    },
  },
};
</script>

<style scoped>
input[type="range"] {
  height: 26px;
  -webkit-appearance: none;
  margin-top: 2rem;
  width: 280px;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  background: #212529;
  border-radius: 50px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 30px;
  background: #fca311;
  border-radius: 50px;
  cursor: pointer;
  margin-top: -3px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
}

input[type="range"]::-moz-range-thumb {
  background: #fca311;
  height: 15px;
  width: 30px;
  cursor: pointer;
}

input[type="range"]::-moz-range-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  background: #212529;
  border-radius: 50px;
}
</style>
