/**
* Libraries
*/

import React, {
    useEffect,
    useState
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import * as THREE from 'three';

import {
    OrbitControls
} from "three/examples/jsm/controls/OrbitControls";

/**
* Components
*/

/**
* Styles
*/

import './movingBubbles.scss';

/**
* Shaders
*/

import * as Shaders from './Shaders';

/**
* Images
*/

import PosX from '../../../images/mountains/dejavu_ft.png';
import NegX from '../../../images/mountains/dejavu_bk.png';
import PosY from '../../../images/mountains/dejavu_up.png';
import NegY from '../../../images/mountains/dejavu_dn.png';
import PosZ from '../../../images/mountains/dejavu_rt.png';
import NegZ from '../../../images/mountains/dejavu_lf.png';
//http://www.custommapmakers.org/skyboxes.php

/**
* MovingBubbles component definition and export
*/

export const MovingBubbles = (props) => {

    /**
    * Methods
    */

    useEffect(() => {
        let mouseX = 0, mouseY = 0;
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;
        let spheres = [];

        document.addEventListener( 'mousemove', () => {
            mouseX = (event.clientX - windowHalfX) * 10;
            mouseY = (event.clientY - windowHalfY) * 10;
        }, false);

        // Get the DOM element to attach to
        const canvas  = document.getElementById('#container');

        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 100000);
        camera.position.z = 3200;
                
        const loader = new THREE.CubeTextureLoader();
        const texture = loader.load([
            PosX,
            NegX,
            PosY,
            NegY,
            PosZ,
            NegZ,
        ]);
        texture.format = THREE.RGBFormat;
        
        const scene = new THREE.Scene();
        scene.background = texture;

        const geometry = new THREE.SphereBufferGeometry(100, 32, 16);

        const uniforms = {
            mRefractionRatio: {value: 1.02},
            mFresnelBias: {value: 0.1},
            mFresnelPower: {value: 2.0},
            mFresnelScale: {value: 1.0},
            tCube: {value: null}
        }
        
        var uniforms2 = THREE.UniformsUtils.clone(uniforms);
        uniforms["tCube"].value = texture;

        const material = new THREE.ShaderMaterial( {
            uniforms: uniforms2,
            vertexShader: Shaders.vert,
            fragmentShader: Shaders.frag
        } );
        
        for ( var i = 0; i < 500; i ++ ) {
            var mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = Math.random() * 10000 - 5000;
            mesh.position.y = Math.random() * 10000 - 5000;
            mesh.position.z = Math.random() * 10000 - 5000;
            mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;
            scene.add(mesh);
            spheres.push(mesh);
        }

        const renderer = new THREE.WebGLRenderer({canvas});
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        window.addEventListener( 'resize', () => {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }, false);
        
        const render = (timer) => {
            var timer = 0.0001 * Date.now();
            camera.position.x += (mouseX - camera.position.x) * .05;
            camera.position.y += (- mouseY - camera.position.y) * .05;
            camera.lookAt(scene.position);

            spheres.forEach((sphere, i) => {
                sphere.position.x = 5000 * Math.cos( timer + i );
                sphere.position.y = 5000 * Math.sin( timer + i * 1.1 );
            });

            renderer.render(scene, camera);
           
            requestAnimationFrame(render);
        }

        requestAnimationFrame(render);
        
    }, []);

    /**
    * Markup
    */

    return(
        <>
            <canvas className="moving-bubbles-canvas" id="#container"/>
            <div className="moving-bubbles-text">
                <div>
                    <svg height="100%" width="100%">
                        <text x="50%" y="50%" fill="rgb(238, 203, 184)" textAnchor="middle">{props.mainHeader}</text>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default MovingBubbles;
 