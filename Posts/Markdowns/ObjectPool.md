---
title: ObjectPool
date: 2023-03-30 20:00:40
tags:
categories:
pre: 
img: 
---
# Introduce
In our recent game production experience, we often faced the problem of excessive memory consumption.
For example, when pressing the Shift key, the player can get a high speed, and some shadow will appear in the path. The memory will be greatly wasted if we instantiate and destroy the shadow object every time. So, we need to use `ObjectPool` to deal with this situation.
<!--more-->

# Background
In this section, we will discuss what is `ObjectPool`, and why `ObjectPool` can solve this problem.

- ## What is `ObjectPool`
    Interpret it literally, ObjectPool is a pool filled with objects. Then we can get or return the object from this pool.
- ## Why `ObjectPool` can solve this problem
    The worst part of the **Instantiate-Destory** way is that it applied and used the memory for a while before it was discarded. So, when we use the ObjectPool pattern, everything that only is used for a while will be created in the pool for preparation. 

    Now, we built and changed to use the ObjectPool pattern. The objects we need to use are already created in the pool. When we need the object, we only need to get it from the pool, then return to the pool.


In the next section, I will show the structure of ObjectPool.

# Structure
 - Design Pattern: **Singleton**
 - Variables: 
    1. ***static*** ObjectPool **Instance**
    2. int **Pool_Size**
    3. List\<GameObject\> **Prefabs**  ***//Because I use the ObjectPool in Unity, you can use other types.***
    4. Dictionary<string, Queue\<GameObject\>> **Available_Objects_Dictionary**
 - Functions:
    1. void **Awake**()
    2. void **FillPool**()
    3. void **ReturnPool**()
    4. GameObject **GetPool**()

# Variables
- ## Instance
The instance is an instance of ObjectPool class, we will access this variable in other scripts to use the ObjectPool.
- ## Pool_Size
Pool_Size is the basic size of the ObjectPool, all objects will be created in size copies in the pool at script awake.  
- ## Prefabs
Prefabs can be added at the Unity Interface, and they will be created in the pool.
- ## Available_Objects_Dictionary
This variable is the most important part, it can allow us to invoke the ObjectPool by the name of the object. The value of the dictionary is a queue, it is the main part of the ObjectPool or we can call this the pool. Every object will be stored in this queue.  

# Functions
- ## Awake
    ```cs
    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(this);
        }
        else
        {
            Instance = this;
            FillPool(Pool_Size);
        }
    }
    ```

    `Awake` is the standard part of a Singleton class, it is used to be sure the program only has one instance. When the instance is not the first instance, it will kill the instance. And if it is, this function will invoke `FillPool`.

- ## FillPool
    ```cs
    private void FillPool(int Size)
    {
        for (int i = 0; i < Size; i++)
        {
            foreach (var Prefab in Prefabs)
            {
                var obj = instantiate(Prefab, transform, true);
                ReturnPool(obj);
            }
        }
    }
    ```

    `FillPool` will fill the pool by every prefab in the Prefabs. It will invoke `ReturnPool` to do a standard process to return the object into the pool.

- ## ReturnPool
    ```cs
    public void ReturnPool(GameObject Object)
    {
        Object.SetActive(false);
		
        if (!Available_Objects_Dictionary.ContainsKey(Object.name))
        {
            Available_Objects_Dictionary.Add(Object.name, new Queue<GameObject>());
        }
        Available_Objects_Dictionary[Object.name].Enqueue(Object);
    }
    ```
    `ReturnPool` will put the object into the corresponding pool, if the pool does not exist, it will create one first.

- ## GetPool
    ```cs
    public GameObject GetPool(GameObject Object)
    {
        var NAME = Object.name + "(Clone)"; //Because Unity will add "(Clone)" in the end of the instantiated prefabs
        if (Available_Objects_Dictionary[NAME].Count == 0)
        {
            FillPool(1);
        }

        var obj = Available_Objects_Dictionary[NAME].Dequeue();
        obj.SetActive(true);
        return obj;
    }
    ```
    `GetPool` will be sure you can get an object from the pool. When there are no objects in the pool, it will fill one into the pool. 

# Improvement
Now, we have the fundamental ObjectPool instance, we can use it to reuse our objects already created in Scene. But it still has something that can be improved, the most obvious one is the `FillPool` method.

When invoking the `FillPool` method, it will fill the pool with a `Size` number of objects. It looks right when our objects are needed all in a controllable small range of quantities. But when we need to use a large number of one type of object in a short time, the other objects created as foils are wasted.

To solve this problem, we only need to add a `Prefabs` parameter to the `FillPool` method in order to designate what prefabs need to be filled into the pool.

The improved `FillPool` method will be looked like as this
```cs
private void FillPool(int Size, List<GameObject> Prefabs)
{
    for (int i = 0; i < Size; i++)
    {
        foreach (var Prefab in Prefabs)
        {
            var obj = instantiate(Prefab, transform, true);
            ReturnPool(obj);
        }
    }
}
```
and the `GetPool` method needs to be improved like this
```cs
public GameObject GetPool(GameObject Object)
{
    var NAME = Object.name + "(Clone)"; //Because Unity will add "(Clone)" in the end of the instantiated prefabs
    if (Available_Objects_Dictionary[NAME].Count == 0)
    {
        FillPool(1, new List<GameObject>(){Object});
    }

    var obj = Available_Objects_Dictionary[NAME].Dequeue();
    obj.SetActive(true);
    return obj;
}
```
meanwhile, the `Awake` also need to be improved like this
```cs
private void Awake()
{
    if (Instance != null && Instance != this)
    {
        Destroy(this);
    }
    else
    {
        Instance = this;
        FillPool(Pool_Size, Prefabs);
    }
}

```




Now, when we use the `GetPool` to get an object from the pool, it will only create one object in the pool when this type of object is empty in the pool.


# Conclusion
We have implemented an ObjectPool in the steps above. The pool can store and release the GameObject, and we can use this to save memory in the bullet script or other same function script. But this class also has some inconvenience, that is we can only use it as a GameObject pool, if we want to store another type, we need to create another class of object. About how to solve it to make the ObjectPool generalization, it is your thinking homework. I may put the method in another post. 
