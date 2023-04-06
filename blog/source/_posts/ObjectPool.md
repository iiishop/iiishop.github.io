---
title: ObjectPool
date: 2023-03-30 20:00:40
tags:
- Unity
- Design Pattern
categories:
- EnglishBlog
- Design Pattern
---
# Introduce
In our recent game production experience, we often faced the problem of excessive memory consumption.
For example, when pressed Shift kay, the player can get a high speed, and some shadow will appear in the path. If we instantiate and destory the shadow object every time, the memory will be greatly wasted. So, we need to use `ObjectPool` to deal with this situation.
<!--more-->

# Background
In this section, we will discuss what is `ObjectPool`, and why `ObjectPool` can solve this problem.

- ## What is `ObjectPool`
    Interpret it literally, ObjectPool is a pool filled with objects. Then we can get or return the object from this pool.
- ## Why `ObjectPool` can solve this problem
    The worest part of the **Instantiate-Destory** way is it applied and used the memory for only a while before it was discarded. So, when we use the ObjectPool pattern, everything that only be used a while will be created in the pool for preparation. 

    Now, we built and changed to use the ObjectPool pattern. The objects we need to use are already created in the pool. When we need the object, we only need to get from the pool, then return into the pool.


In the next section, I will show the structure of ObjectPool.

# Structure
 - Design Pattern: **Signleton**
 - Variables: 
    1. ***static*** ObjectPool **Instance**
    2. int **Pool_Size**
    3. List\<GameObject\> **Prefabs**  ***//Because I use the ObjectPool in Unity, you can use other type.***
    4. Dictionary<string, Queue\<GameObject\>> **Available_Objects_Dictionary**
 - Functions:
    1. void **Awake**()
    2. void **FillPool**()
    3. void **ReturnPool**()
    4. GameObject **GetPool**()

# Variables
- ## Instance
Instance is a instance of ObjectPool class, we will access this variable in other script to use the ObjectPool.
- ## Pool_Size
Pool_Size is the basic size of the ObjectPool, all objects will be created in size copies in the pool at script awake.  
- ## Prefabs
Prefabs can be added at the Unity Interface, and they will be created in the pool.
- ## Available_Objects_Dictionary
This variable is the most important part, it can allow we to invoke the ObjectPool by the name of object. The value of the dictionary is a queue, it is the main part of the ObjectPool or we can call this is the pool. Every object will be stored in this queue.  

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

    `Awake` is the standard part of a Signleton class, it is used to be sure the program only has one instance. When the instance is not the first instance, it will kill the instance. And if it is, this function will invoke `FillPool`.

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

    `FillPool` will fill the pool by evey prefab in the Prefabs. It will invoke `ReturnPool` to do a standard process to return the object into the pool.

- ## ReturnPool
    ```cs
    public void ReturnPool(GameObject Object)
    {
        Object.SetActive(false);

        if (Available_Objects_Dictionary.ContainsKey(Object.name))
        {
            Available_Objects_Dictionary[Object.name].Enqueue(Object);
        }
        else
        {
            Available_Objects_Dictionary.Add(Object.name, new Queue<GameObject>());
            Available_Objects_Dictionary[Object.name].Enqueue(Object);
        }
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
    `GetPool` will be sure you can get a object from the pool. When there are no object in the pool, it will fill one into the pool. 

# Improvment
Now, we have the fundamental ObjectPool instance, we can use it to reuse our objects already created in scene. But it still have something can be improved, the most obvious one is the `FillPool` method.

When invoke the `FillPool` method, it will fill the pool with a `Size` number of objects. It looks right when our objects needed all in a controllable small range of quantities. But when we need to use a large number of one type objects a short time, the other objects created as foils are wasted.

To solve this problem, we only need to add a `Prefabs` parameter to the `FillPool` method in order to designate what prefabs need to be fill into the pool.

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
and the `GetPool` method need to be improved like this
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




Now, when we use the `GetPool` to get a object from pool, it will only create one object in the pool when this type of object is empty in the pool.


# Conclusion
We have implement a ObjectPool in the steps above. The pool can store and release the GameObject, and we can use this to save memory in the bullet script or other same function scropt. But this class also have some inconvenience, that is we can only use it as a GameObject pool, if we want to store another type, we need to create another class of object. About how to solve it to make the ObjectPool generalization, it is your thinking homework. I may put the method in another post. 
