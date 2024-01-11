"use client";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import Page from '@/components/page'
import Section from '@/components/section'
import Image from "next/image";
import Link from "next/link";
import MobileDetect from "mobile-detect";
import { GetServerSidePropsContext } from "next";
import { isMobile } from 'react-device-detect';

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

// api key : 1d58c97239mshab9cddc41e1f154p11d776jsn02631f12c94a

export default function SpaceActivity() {
  const handleChange = (e) => {
    setN(e.target.value);
  };
  const doRefresh = () => {
    // mutate("http://api.open-notify.org/astros.json");
    mutate("https://api.wheretheiss.at/v1/satellites/25544");
  };
  const [n, setN] = useState();
  // const { data: data1, error: error1 } = useSWR("http://api.open-notify.org/astros.json", fetcher);
  const { data: data2, error: error2 } = useSWR("https://api.wheretheiss.at/v1/satellites/25544", fetcher);
  // if (error1)
  //   return <div className="p-2 m-2">Failed to load : {error1.message}</div>;
  // if (!data1) return <div className="p-2 m-2">Loading...</div>;
  if (error2)
    return <div className="p-2 m-2">Failed to load : {error2.message}</div>;
  if (!data2) return <div className="p-2 m-2">Loading...</div>;
  // const peopleinspace = JSON.parse(data1)
  const iss = data2
  const isstimestamp = iss.timestamp
  const isslongitude = iss.longitude
  const isslatitude = iss.latitude
  // const amount = peopleinspace.number
  // const people = peopleinspace.people
  const unixEpochTimeMS = isstimestamp * 1000;
  const d = new Date(unixEpochTimeMS);
  const ISSstrDate = d.toLocaleString();
  if (isMobile) {
    return (
      <Page>
        <Section>
          <div>
            <h1 className="text-7xl font-bold">7</h1><br></br><h1 className="text-3xl font-semibold text-zinc-800 dark:text-zinc-200 underline underline-offset-8">People in Space Right Now</h1>
          </div>
          <br></br>
            <div>
              <Image
                className="rounded-md"
                src="/images/iss.jpg"
                width={900}
                height={600}
                alt="Image of ISS"
              />
            </div>
        </Section>
        <Section>
          <div><h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-200 underline underline-offset-4">ISS Location</h1></div>
          <br />
          <div>
            <div><h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">Last Updated: {ISSstrDate}</h1></div>
            <br />
            <div><h1 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Longitude ➡️ {isslongitude}</h1></div>
            <br />
            <div><h1 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Longitude ➡️ {isslatitude}</h1></div>
          </div>
          <br />
          <div>
            <iframe src="/isslocationmobile.html" width={310} height={230}></iframe>
          </div>
        </Section>
      </Page>
    );
  }
  else {
    return (
      <Page>
        <Section>
          <div>
            <h1 className="text-7xl font-bold">7</h1><br></br><h1 className="text-3xl font-semibold text-zinc-800 dark:text-zinc-200 underline underline-offset-8">People in Space Right Now</h1>
          </div>
          <br></br>
            <div>
              <Image
                className="rounded-md"
                src="/images/iss.jpg"
                width={900}
                height={600}
                alt="Image of ISS"
              />
            </div>
        </Section>
        <Section>
          <div><h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-200 underline underline-offset-4">ISS Location</h1></div>
          <br />
          <div>
            <div><h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">Last Updated: {ISSstrDate}</h1></div>
            <br />
            <div><h1 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Longitude ➡️ {isslongitude}</h1></div>
            <br />
            <div><h1 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Longitude ➡️ {isslatitude}</h1></div>
          </div>
          <br />
          <div>
            <iframe src="/isslocation.html" width={500} height={330}></iframe>
          </div>
        </Section>
      </Page>
    );
  }

}

// const getCraftWikiLink = (craftName) => {
//   // Add conditions to redirect to different Wikipedia pages based on craftName
//   if (craftName === 'ISS') {
//     return 'https://en.wikipedia.org/wiki/International_Space_Station';
//   } else if (craftName === 'Tiangong') {
//     return 'https://en.wikipedia.org/wiki/Tiangong_space_station';
//   }
//   // Add more conditions as needed
//   return '#'; // Default to a placeholder link if the craft name doesn't match any condition
// };
