'use client'
import { Component, ReactNode, Suspense, useEffect, useState } from 'react';

export default async function Streaming() {
    return (
        <section>
            <Suspense fallback={<h3>Still loading.</h3>}>
                <Test />
            </Suspense>
        </section>
    )
}

function timeout(delay: number) {
    return new Promise((res) => setInterval(res, delay));
}

function Test() {
    useEffect(() => {
        var counter = 1;
        var interval = setInterval(function() {
            var liNode = document.createElement("li");
            var textNode = document.createTextNode(`${Math.random() * 10000}`);
            liNode.appendChild(textNode);
            document.getElementById('testDiv')?.appendChild(liNode);
            counter++;

            if (counter == 10) {
                console.log('I am stopped');
                clearInterval(interval);
            }
        }, 1000);

    })

    return (
        <section>
            <ol id='testDiv'>
            </ol>
        </section>
    )
}