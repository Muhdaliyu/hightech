<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated Box</title>
    <style>
        #box {
            width: 50px;
            height: 50px;
            background-color: blue;
            position: absolute;
            top: 50px;
            left: 0;
        }
    </style>
</head>
<body>
    <div id="box"></div>
    <script>
        const box = document.getElementById('box');
        let position = 0;

        function animate() {
            position += 2;
            box.style.left = position + 'px';

            if (position < window.innerWidth - box.offsetWidth) {
                requestAnimationFrame(animate);
            }
        }

        animate();
    </script>
</body>
</html>